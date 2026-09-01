// Fake Jurassic Park filesystem. Names lifted from / inspired by the movie scene.
// dir: { name, dirs:[], files:[{ name, size (KB), kind }] }

function f(name, size, kind) {
  return { name, size, kind: kind || (name.match(/\.(exe|sh|bin|obj)$/) ? "exec" : "data") };
}

export const FS_ROOT = {
  name: "usr",
  dirs: [
    {
      name: "jp",
      dirs: [
        {
          name: "park",
          dirs: [
            {
              name: "visitors_center",
              dirs: [
                { name: "control_room", dirs: [], files: [
                  f("door_locks.cfg", 240), f("phones.cfg", 130), f("fence_grid.dat", 900),
                  f("tour_program.exe", 1400), f("cctv_feed.dat", 2200), f("ui_main.rc", 60),
                  f("keycheck.exe", 300), f("access.log", 700),
                ]},
                { name: "lab", dirs: [], files: [
                  f("dna_seq_trex.gen", 3100), f("dna_seq_raptor.gen", 2900), f("frog_fill.gen", 800),
                  f("embryo_db.dat", 4100), f("mr_dna.avi", 2600), f("incubator.cfg", 90),
                ]},
                { name: "theater", dirs: [], files: [
                  f("welcome.avi", 3800), f("seat_motors.cfg", 70), f("projector.cfg", 55),
                ]},
              ],
              files: [
                f("visitor_map.dat", 420), f("gift_shop.db", 610), f("cafeteria.mnu", 45),
                f("whte_rbt.obj", 1337, "exec"), f("lockdown.sh", 210),
              ],
            },
            { name: "armory", dirs: [], files: [
              f("inventory.db", 520), f("lockers.cfg", 88), f("spas12.dat", 120), f("flares.dat", 64),
            ]},
            { name: "chemical", dirs: [], files: [
              f("lysine_contingency.dat", 1900, "exec"), f("tranq_stock.db", 340), f("compounds.db", 760),
              f("hazmat.cfg", 52), f("antivenom.dat", 210),
            ]},
            { name: "dilo_dock", dirs: [], files: [
              f("dock_crane.cfg", 95), f("shipping.log", 480), f("barbasol.dat", 15),
            ]},
            { name: "fence", dirs: [], files: [
              f("voltage_10kv.cfg", 130), f("grid_map.dat", 1500), f("breaker_01.sta", 40),
              f("breaker_02.sta", 40), f("breaker_03.sta", 40), f("warning_signs.dat", 25),
            ]},
            { name: "hammonds_lodge", dirs: [], files: [
              f("ice_cream.db", 300, "exec"), f("amber_cane.dat", 77), f("flea_circus.avi", 1800),
              f("spared_no_expense.txt", 12),
            ]},
            { name: "helipad", dirs: [], files: [
              f("inbound.log", 210), f("beacon.cfg", 33), f("wind_sock.sta", 8),
            ]},
            { name: "hotel", dirs: [], files: [
              f("rooms.db", 450), f("keycards.db", 380), f("minibar.log", 95),
            ]},
            { name: "main_gate", dirs: [], files: [
              f("gate_motors.cfg", 140), f("torches.cfg", 30), f("jp_theme.mid", 88, "exec"),
            ]},
            { name: "perimeter", dirs: [], files: [
              f("sensors_n.dat", 620), f("sensors_s.dat", 640), f("sensors_e.dat", 590),
              f("sensors_w.dat", 610), f("motion_alerts.log", 1100),
            ]},
            { name: "pharmaceutical", dirs: [], files: [
              f("stock.db", 830), f("orders_ingen.db", 540), f("cold_chain.cfg", 60),
            ]},
            { name: "trex_paddock", dirs: [], files: [
              f("goat_dispenser.cfg", 70, "exec"), f("fence_sec_07.sta", 40), f("tracking_rexy.dat", 2400),
              f("feeding.log", 380), f("objects_in_mirror.txt", 9),
            ]},
          ],
          files: [
            f("park_map.dat", 2100), f("tour_route.dat", 800), f("weather_stn.dat", 340),
            f("staff_radio.cfg", 66), f("gate_codes.db", 150), f("dino_census.db", 980),
            f("raptor_count.dat", 3), f("feeding_sched.dat", 210), f("power_grid.cfg", 320),
            f("rain_warning.sta", 12), f("island_lease.lic", 45), f("visitor_log.db", 640),
            f("goat.dat", 88), f("electric_fences.sh", 130), f("night_vision.cfg", 55),
          ],
        },
        {
          name: "navigation",
          dirs: [],
          files: [
            f("gps_grid.dat", 1400), f("tour_vehicles.cfg", 220), f("track_a.rte", 510),
            f("track_b.rte", 470), f("autopilot.exe", 980),
          ],
        },
        {
          name: "personnel",
          dirs: [],
          files: [
            f("hammond_j.rec", 120), f("arnold_r.rec", 118), f("nedry_d.rec", 666, "exec"),
            f("muldoon_r.rec", 115), f("wu_h.rec", 121), f("harding_g.rec", 110),
            f("payroll.db", 900), f("badge_photos.db", 2300),
          ],
        },
        {
          name: "security",
          dirs: [],
          files: [
            f("door_master.cfg", 310, "exec"), f("cams.cfg", 250), f("alarms.cfg", 190),
            f("keychk.exe", 420), f("nedry_backdoor.tmp", 1201, "exec"), f("audit.log", 1600),
          ],
        },
        {
          name: "video",
          dirs: [],
          files: [
            f("cam_gate.avi", 3300), f("cam_paddock.avi", 3600), f("cam_lab.avi", 2900),
            f("cam_lobby.avi", 2500), f("dennis_desk.avi", 4000),
          ],
        },
        {
          name: "system",
          dirs: [],
          files: [
            f("reboot.sys", 500, "exec"), f("unix_kernel.bin", 4800), f("irix.rel", 150),
            f("phone_lines.cfg", 90), f("main_power.cfg", 140), f("shed_breakers.cfg", 130),
          ],
        },
      ],
      files: [ f("readme.txt", 4), f("ingen.lic", 22) ],
    },
  ],
  files: [ f("motd.txt", 2) ],
};

// Special windows: filename -> content generator handled in main.js
export const SPECIAL_FILES = {
  "whte_rbt.obj": "magic",
  "reboot.sys": "reboot",
  "nedry_backdoor.tmp": "magic",
  "spared_no_expense.txt": "hammond",
};
