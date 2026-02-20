// demoSeed.ts
import type {DemoSeedTypes} from "~/layers/visits/app/features/demo/types/demoDbTypes";

export const demoSeed: DemoSeedTypes = {
    transportCompanies: [
        { id: "tc_001", name: "ТК Север" },
        { id: "tc_002", name: "ТК Восток" },
        { id: "tc_003", name: "ТК Юг" },
        { id: "tc_004", name: "ТК Запад" },
        { id: "tc_005", name: "ТК Центр" },
    ],

    drivers: [
        // tc_001
        { id: "drv_tc001_01", company_id: "tc_001", full_name: "Иванов Сергей Петрович", truck_number: "A101AA77", trailer_number: "TR-0001", phone: "89001001001" },
        { id: "drv_tc001_02", company_id: "tc_001", full_name: "Петров Алексей Игоревич", truck_number: "A102AA77", trailer_number: "TR-0002", phone: "89001002034" },
        { id: "drv_tc001_03", company_id: "tc_001", full_name: "Сидоров Дмитрий Андреевич", truck_number: "A103AA77", trailer_number: "TR-0003", phone: "89001001231" },
        { id: "drv_tc001_04", company_id: "tc_001", full_name: "Кузнецов Максим Олегович", truck_number: "A104AA77", trailer_number: "TR-0004", phone: "89401001021" },
        { id: "drv_tc001_05", company_id: "tc_001", full_name: "Смирнов Павел Николаевич", truck_number: "A105AA77", trailer_number: "TR-0005", phone: "89032001001" },

        // tc_002
        { id: "drv_tc002_01", company_id: "tc_002", full_name: "Васильев Илья Сергеевич", truck_number: "B201BB77", trailer_number: "TR-0006", phone: "89301001002" },
        { id: "drv_tc002_02", company_id: "tc_002", full_name: "Морозов Артём Викторович", truck_number: "B202BB77", trailer_number: "TR-0007", phone: "89001001003" },
        { id: "drv_tc002_03", company_id: "tc_002", full_name: "Фёдоров Роман Евгеньевич", truck_number: "B203BB77", trailer_number: "TR-0008", phone: "89001004001" },
        { id: "drv_tc002_04", company_id: "tc_002", full_name: "Новиков Антон Михайлович", truck_number: "B204BB77", trailer_number: "TR-0009", phone: "89001001005" },
        { id: "drv_tc002_05", company_id: "tc_002", full_name: "Павлов Кирилл Денисович", truck_number: "B205BB77", trailer_number: "TR-0010", phone: "89001001006" },

        // tc_003
        { id: "drv_tc003_01", company_id: "tc_003", full_name: "Волков Николай Сергеевич", truck_number: "C301CC77", trailer_number: "TR-0011", phone: "89001001007" },
        { id: "drv_tc003_02", company_id: "tc_003", full_name: "Соколов Егор Павлович", truck_number: "C302CC77", trailer_number: "TR-0012", phone: "89211001008" },
        { id: "drv_tc003_03", company_id: "tc_003", full_name: "Лебедев Тимур Аркадьевич", truck_number: "C303CC77", trailer_number: "TR-0013", phone: "89211001009" },
        { id: "drv_tc003_04", company_id: "tc_003", full_name: "Козлов Денис Владимирович", truck_number: "C304CC77", trailer_number: "TR-0014", phone: "89001001010" },
        { id: "drv_tc003_05", company_id: "tc_003", full_name: "Попов Степан Анатольевич", truck_number: "C305CC77", trailer_number: "TR-0015", phone: "89001001011" },

        // tc_004
        { id: "drv_tc004_01", company_id: "tc_004", full_name: "Михайлов Владислав Игоревич", truck_number: "D401DD77", trailer_number: "TR-0016", phone: "89001009901" },
        { id: "drv_tc004_02", company_id: "tc_004", full_name: "Беляев Андрей Сергеевич", truck_number: "D402DD77", trailer_number: "TR-0017", phone: "89211001012" },
        { id: "drv_tc004_03", company_id: "tc_004", full_name: "Тарасов Глеб Константинович", truck_number: "D403DD77", trailer_number: "TR-0018", phone: "89001001013" },
        { id: "drv_tc004_04", company_id: "tc_004", full_name: "Захаров Ярослав Романович", truck_number: "D404DD77", trailer_number: "TR-0019", phone: "89001001014" },
        { id: "drv_tc004_05", company_id: "tc_004", full_name: "Орлов Виктор Станиславович", truck_number: "D405DD77", trailer_number: "TR-0020", phone: "89211001015" },

        // tc_005
        { id: "drv_tc005_01", company_id: "tc_005", full_name: "Макаров Евгений Петрович", truck_number: "E501EE77", trailer_number: "TR-0021", phone: "89001001016" },
        { id: "drv_tc005_02", company_id: "tc_005", full_name: "Григорьев Арсений Олегович", truck_number: "E502EE77", trailer_number: "TR-0022", phone: "89001001017" },
        { id: "drv_tc005_03", company_id: "tc_005", full_name: "Данилов Игорь Николаевич", truck_number: "E503EE77", trailer_number: "TR-0023", phone: "82101001019" },
        { id: "drv_tc005_04", company_id: "tc_005", full_name: "Борисов Матвей Сергеевич", truck_number: "E504EE77", trailer_number: "TR-0024", phone: "89001001025" },
        { id: "drv_tc005_05", company_id: "tc_005", full_name: "Жуков Константин Юрьевич", truck_number: "E505EE77", trailer_number: "TR-0025", phone: "89311001026" },
    ],

    arrivalPlaces: [
        { id: "pl_001", name: "Завод Север-1", address: "г. Санкт-Петербург, переулок Каховского, 5А", map_x: 410, map_y: 290, link: 'https://yandex.ru/maps/2/saint-petersburg/house/pereulok_kakhovskogo_5a/Z0kYdANhTUwAQFtjfXV0c3RlZg==/?ll=30.241999%2C59.952804&z=17.16' },
        { id: "pl_002", name: "Завод Север-2", address: "Деревня Заневка, Первый проезд, 1/38", map_x: 1080.1, map_y: 405, link: 'https://yandex.ru/maps/10174/saint-petersburg-and-leningrad-oblast/house/pervy_proyezd_1_38/Z0kYcwZgTEEFQFtjfXVzeXpjbQ==/?ll=30.511378%2C59.929194&z=16.6' },
        { id: "pl_003", name: "Завод Восток-1", address: "г. Санкт-Петербург, Туристская улица, 22Б", map_x: 300.0, map_y: 60, link: 'https://yandex.ru/maps/2/saint-petersburg/house/turistskaya_ulitsa_22b/Z0kYdAdmSUQEQFtjfXV4eHhhZg==/?ll=30.205254%2C59.998348&z=16.97' },
        { id: "pl_004", name: "Завод Восток-2", address: "г. Санкт-Петербург, Арсенальная улица, 78Б", map_x: 710.3, map_y: 220.8, link: 'https://yandex.ru/maps/2/saint-petersburg/house/arsenalnaya_ulitsa_78b/Z0kYdQFhQEMGQFtjfXV3eHxgbA==/?ll=30.363494%2C59.968233&z=16.61' },
        { id: "pl_005", name: "Завод Юг-1", address: "г. Санкт-Петербург, Территория Вольный Остров, 4Е", map_x: 370.7, map_y: 585, link: 'https://yandex.ru/maps/2/saint-petersburg/house/territoriya_volny_ostrov_4ye/Z0kYdARiTEwDQFtjfXR4dH5qbQ==/?ll=30.233443%2C59.895865&z=16.57' },
    ],

    requests: [
        // drv_tc001_01 (has active)
        { id: "req_drv_tc001_01_01", driver_id: "drv_tc001_01", arrival_place_id: "pl_001", created_at: "2026-02-03T09:12:32", ttn_number: "TTN-2026-00001", unload_date: "2026-02-04", unload_start_time: "10:00", status: "accepted", product_name: "Цемент М500", weight_ttn: 20.5, driver_phone: "+7 999 200-00-01" },
        { id: "req_drv_tc001_01_02", driver_id: "drv_tc001_01", arrival_place_id: "pl_001", created_at: "2026-02-06T14:30:43", ttn_number: "TTN-2026-00002", unload_date: "2026-03-18", unload_start_time: "09:30", status: "active", product_name: "Щебень фр. 5-20", weight_ttn: 24.0, driver_phone: "+7 999 200-00-01" },
        { id: "req_drv_tc001_01_03", driver_id: "drv_tc001_01", arrival_place_id: "pl_002", created_at: "2026-02-01T08:05:12", ttn_number: "TTN-2026-00003", unload_date: "2026-02-02", unload_start_time: "12:15", status: "rejected", product_name: "Песок строительный", weight_ttn: 18.2, driver_phone: "+7 999 200-00-01" },

        // drv_tc001_02
        { id: "req_drv_tc001_02_01", driver_id: "drv_tc001_02", arrival_place_id: "pl_001", created_at: "2026-02-02T11:20:02", ttn_number: "TTN-2026-00004", unload_date: "2026-02-03", unload_start_time: "08:45", status: "accepted", product_name: "Металлопрокат", weight_ttn: 16.8, driver_phone: "+7 999 200-00-02" },
        { id: "req_drv_tc001_02_02", driver_id: "drv_tc001_02", arrival_place_id: "pl_002", created_at: "2026-02-05T16:10:44", ttn_number: "TTN-2026-00005", unload_date: "2026-02-06", unload_start_time: "14:00", status: "rejected", product_name: "Кирпич рядовой", weight_ttn: 12.4, driver_phone: "+7 999 200-00-02" },

        // drv_tc001_03 (has active)
        { id: "req_drv_tc001_03_01", driver_id: "drv_tc001_03", arrival_place_id: "pl_003", created_at: "2026-02-04T10:00:54", ttn_number: "TTN-2026-00006", unload_date: "2026-02-05", unload_start_time: "09:00", status: "accepted", product_name: "Гипс", weight_ttn: 10.0, driver_phone: "+7 999 200-00-03" },
        { id: "req_drv_tc001_03_02", driver_id: "drv_tc001_03", arrival_place_id: "pl_004", created_at: "2026-02-07T09:40:38", ttn_number: "TTN-2026-00007", unload_date: "2026-03-18", unload_start_time: "11:30", status: "active", product_name: "Плитка керамическая", weight_ttn: 8.6, driver_phone: "+7 999 200-00-03" },
        { id: "req_drv_tc001_03_03", driver_id: "drv_tc001_03", arrival_place_id: "pl_001", created_at: "2026-01-31T13:15:42", ttn_number: "TTN-2026-00008", unload_date: "2026-02-01", unload_start_time: "15:00", status: "rejected", product_name: "Сухие смеси", weight_ttn: 14.2, driver_phone: "+7 999 200-00-03" },

        // drv_tc001_04
        { id: "req_drv_tc001_04_01", driver_id: "drv_tc001_04", arrival_place_id: "pl_004", created_at: "2026-02-03T07:55:23", ttn_number: "TTN-2026-00009", unload_date: "2026-02-03", unload_start_time: "13:20", status: "rejected", product_name: "Арматура", weight_ttn: 19.7, driver_phone: "+7 999 200-00-04" },
        { id: "req_drv_tc001_04_02", driver_id: "drv_tc001_04", arrival_place_id: "pl_005", created_at: "2026-02-06T12:05:59", ttn_number: "TTN-2026-00010", unload_date: "2026-02-07", unload_start_time: "10:10", status: "accepted", product_name: "Плиты перекрытия", weight_ttn: 22.9, driver_phone: "+7 999 200-00-04" },

        // drv_tc001_05
        { id: "req_drv_tc001_05_01", driver_id: "drv_tc001_05", arrival_place_id: "pl_001", created_at: "2026-02-01T10:10:00", ttn_number: "TTN-2026-00011", unload_date: "2026-02-02", unload_start_time: "09:10", status: "accepted", product_name: "Песок строительный", weight_ttn: 21.0, driver_phone: "+7 999 200-00-05" },
        { id: "req_drv_tc001_05_02", driver_id: "drv_tc001_05", arrival_place_id: "pl_002", created_at: "2026-02-04T15:25:43", ttn_number: "TTN-2026-00012", unload_date: "2026-02-05", unload_start_time: "16:00", status: "rejected", product_name: "Щебень фр. 20-40", weight_ttn: 25.0, driver_phone: "+7 999 200-00-05" },

        // drv_tc002_01 (has active)
        { id: "req_drv_tc002_01_01", driver_id: "drv_tc002_01", arrival_place_id: "pl_003", created_at: "2026-02-02T08:35:11", ttn_number: "TTN-2026-00013", unload_date: "2026-02-02", unload_start_time: "14:30", status: "accepted", product_name: "Кирпич рядовой", weight_ttn: 13.1, driver_phone: "+7 999 200-00-06" },
        { id: "req_drv_tc002_01_02", driver_id: "drv_tc002_01", arrival_place_id: "pl_004", created_at: "2026-02-08T09:05:41", ttn_number: "TTN-2026-00014", unload_date: "2026-03-17", unload_start_time: "10:30", status: "active", product_name: "Сухие смеси", weight_ttn: 9.8, driver_phone: "+7 999 200-00-06" },
        { id: "req_drv_tc002_01_03", driver_id: "drv_tc002_01", arrival_place_id: "pl_003", created_at: "2026-02-05T17:40:32", ttn_number: "TTN-2026-00015", unload_date: "2026-02-06", unload_start_time: "09:20", status: "rejected", product_name: "Гипсокартон", weight_ttn: 6.2, driver_phone: "+7 999 200-00-06" },

        // drv_tc002_02
        { id: "req_drv_tc002_02_01", driver_id: "drv_tc002_02", arrival_place_id: "pl_005", created_at: "2026-02-01T12:00:33", ttn_number: "TTN-2026-00016", unload_date: "2026-02-02", unload_start_time: "11:00", status: "rejected", product_name: "Металлопрокат", weight_ttn: 17.3, driver_phone: "+7 999 200-00-07" },
        { id: "req_drv_tc002_02_02", driver_id: "drv_tc002_02", arrival_place_id: "pl_002", created_at: "2026-02-03T09:15:23", ttn_number: "TTN-2026-00017", unload_date: "2026-02-04", unload_start_time: "08:30", status: "accepted", product_name: "Цемент М500", weight_ttn: 19.5, driver_phone: "+7 999 200-00-07" },

        // drv_tc002_03 (has active)
        { id: "req_drv_tc002_03_01", driver_id: "drv_tc002_03", arrival_place_id: "pl_002", created_at: "2026-02-04T18:10:53", ttn_number: "TTN-2026-00018", unload_date: "2026-02-05", unload_start_time: "13:00", status: "accepted", product_name: "Плитка керамическая", weight_ttn: 7.9, driver_phone: "+7 999 200-00-08" },
        { id: "req_drv_tc002_03_02", driver_id: "drv_tc002_03", arrival_place_id: "pl_001", created_at: "2026-02-08T10:20:51", ttn_number: "TTN-2026-00019", unload_date: "2026-03-25", unload_start_time: "09:00", status: "active", product_name: "Кирпич облицовочный", weight_ttn: 11.6, driver_phone: "+7 999 200-00-08" },
        { id: "req_drv_tc002_03_03", driver_id: "drv_tc002_03", arrival_place_id: "pl_002", created_at: "2026-02-02T07:50:12", ttn_number: "TTN-2026-00020", unload_date: "2026-02-03", unload_start_time: "16:10", status: "rejected", product_name: "Песок строительный", weight_ttn: 20.0, driver_phone: "+7 999 200-00-08" },

        // drv_tc002_04
        { id: "req_drv_tc002_04_01", driver_id: "drv_tc002_04", arrival_place_id: "pl_004", created_at: "2026-02-03T13:35:43", ttn_number: "TTN-2026-00021", unload_date: "2026-02-04", unload_start_time: "12:00", status: "accepted", product_name: "Арматура", weight_ttn: 18.0, driver_phone: "+7 999 200-00-09" },
        { id: "req_drv_tc002_04_02", driver_id: "drv_tc002_04", arrival_place_id: "pl_004", created_at: "2026-02-06T08:15:00", ttn_number: "TTN-2026-00022", unload_date: "2026-02-07", unload_start_time: "08:50", status: "rejected", product_name: "Плиты перекрытия", weight_ttn: 23.5, driver_phone: "+7 999 200-00-09" },

        // drv_tc002_05
        { id: "req_drv_tc002_05_01", driver_id: "drv_tc002_05", arrival_place_id: "pl_003", created_at: "2026-02-02T15:00:01", ttn_number: "TTN-2026-00023", unload_date: "2026-02-03", unload_start_time: "10:40", status: "rejected", product_name: "Гипс", weight_ttn: 9.1, driver_phone: "+7 999 200-00-10" },
        { id: "req_drv_tc002_05_02", driver_id: "drv_tc002_05", arrival_place_id: "pl_004", created_at: "2026-02-05T09:25:48", ttn_number: "TTN-2026-00024", unload_date: "2026-02-06", unload_start_time: "15:10", status: "accepted", product_name: "Сухие смеси", weight_ttn: 12.0, driver_phone: "+7 999 200-00-10" },

        // drv_tc003_01
        { id: "req_drv_tc003_01_01", driver_id: "drv_tc003_01", arrival_place_id: "pl_005", created_at: "2026-02-01T09:45:09", ttn_number: "TTN-2026-00025", unload_date: "2026-02-02", unload_start_time: "12:40", status: "accepted", product_name: "Цемент М500", weight_ttn: 20.0, driver_phone: "+7 999 200-00-11" },
        { id: "req_drv_tc003_01_02", driver_id: "drv_tc003_01", arrival_place_id: "pl_002", created_at: "2026-02-04T11:10:52", ttn_number: "TTN-2026-00026", unload_date: "2026-02-05", unload_start_time: "09:25", status: "rejected", product_name: "Щебень фр. 5-20", weight_ttn: 24.5, driver_phone: "+7 999 200-00-11" },

        // drv_tc003_02 (has active)
        { id: "req_drv_tc003_02_01", driver_id: "drv_tc003_02", arrival_place_id: "pl_004", created_at: "2026-02-03T10:30:43", ttn_number: "TTN-2026-00027", unload_date: "2026-02-04", unload_start_time: "10:10", status: "accepted", product_name: "Металлопрокат", weight_ttn: 15.2, driver_phone: "+7 999 200-00-12" },
        { id: "req_drv_tc003_02_02", driver_id: "drv_tc003_02", arrival_place_id: "pl_003", created_at: "2026-02-08T12:20:43", ttn_number: "TTN-2026-00028", unload_date: "2026-03-18", unload_start_time: "15:15", status: "active", product_name: "Арматура", weight_ttn: 18.9, driver_phone: "+7 999 200-00-12" },
        { id: "req_drv_tc003_02_03", driver_id: "drv_tc003_02", arrival_place_id: "pl_001", created_at: "2026-02-05T16:55:23", ttn_number: "TTN-2026-00029", unload_date: "2026-02-06", unload_start_time: "09:05", status: "rejected", product_name: "Песок строительный", weight_ttn: 19.2, driver_phone: "+7 999 200-00-12" },

        // drv_tc003_03
        { id: "req_drv_tc003_03_01", driver_id: "drv_tc003_03", arrival_place_id: "pl_004", created_at: "2026-02-02T07:40:56", ttn_number: "TTN-2026-00030", unload_date: "2026-03-03", unload_start_time: "08:10", status: "accepted", product_name: "Гипсокартон", weight_ttn: 6.9, driver_phone: "+7 999 200-00-13" },
        { id: "req_drv_tc003_03_02", driver_id: "drv_tc003_03", arrival_place_id: "pl_004", created_at: "2026-02-06T10:05:37", ttn_number: "TTN-2026-00031", unload_date: "2026-03-07", unload_start_time: "14:20", status: "rejected", product_name: "Плитка керамическая", weight_ttn: 8.1, driver_phone: "+7 999 200-00-13" },

        // drv_tc003_04
        { id: "req_drv_tc003_04_01", driver_id: "drv_tc003_04", arrival_place_id: "pl_003", created_at: "2026-02-03T12:10:27", ttn_number: "TTN-2026-00032", unload_date: "2026-03-04", unload_start_time: "15:30", status: "rejected", product_name: "Кирпич рядовой", weight_ttn: 12.9, driver_phone: "+7 999 200-00-14" },
        { id: "req_drv_tc003_04_02", driver_id: "drv_tc003_04", arrival_place_id: "pl_004", created_at: "2026-02-05T09:35:35", ttn_number: "TTN-2026-00033", unload_date: "2026-03-06", unload_start_time: "10:05", status: "accepted", product_name: "Сухие смеси", weight_ttn: 11.4, driver_phone: "+7 999 200-00-14" },

        // drv_tc003_05 (has active)
        { id: "req_drv_tc003_05_01", driver_id: "drv_tc003_05", arrival_place_id: "pl_005", created_at: "2026-02-01T14:25:38", ttn_number: "TTN-2026-00034", unload_date: "2026-03-02", unload_start_time: "10:50", status: "rejected", product_name: "Щебень фр. 20-40", weight_ttn: 26.0, driver_phone: "+7 999 200-00-15" },
        { id: "req_drv_tc003_05_02", driver_id: "drv_tc003_05", arrival_place_id: "pl_002", created_at: "2026-02-08T08:10:43", ttn_number: "TTN-2026-00035", unload_date: "2026-03-18", unload_start_time: "13:10", status: "active", product_name: "Цемент М500", weight_ttn: 20.8, driver_phone: "+7 999 200-00-15" },
        { id: "req_drv_tc003_05_03", driver_id: "drv_tc003_05", arrival_place_id: "pl_003", created_at: "2026-02-04T17:05:23", ttn_number: "TTN-2026-00036", unload_date: "2026-02-05", unload_start_time: "09:40", status: "accepted", product_name: "Песок строительный", weight_ttn: 18.7, driver_phone: "+7 999 200-00-15" },

        // drv_tc004_01
        { id: "req_drv_tc004_01_01", driver_id: "drv_tc004_01", arrival_place_id: "pl_001", created_at: "2026-02-02T09:05:00", ttn_number: "TTN-2026-00037", unload_date: "2026-02-03", unload_start_time: "12:10", status: "accepted", product_name: "Арматура", weight_ttn: 17.8, driver_phone: "+7 999 200-00-16" },
        { id: "req_drv_tc004_01_02", driver_id: "drv_tc004_01", arrival_place_id: "pl_003", created_at: "2026-02-06T13:30:32", ttn_number: "TTN-2026-00038", unload_date: "2026-02-07", unload_start_time: "09:00", status: "rejected", product_name: "Металлопрокат", weight_ttn: 15.9, driver_phone: "+7 999 200-00-16" },

        // drv_tc004_02 (has active)
        { id: "req_drv_tc004_02_01", driver_id: "drv_tc004_02", arrival_place_id: "pl_003", created_at: "2026-02-03T08:25:09", ttn_number: "TTN-2026-00039", unload_date: "2026-02-04", unload_start_time: "09:30", status: "accepted", product_name: "Кирпич облицовочный", weight_ttn: 11.2, driver_phone: "+7 999 200-00-17" },
        { id: "req_drv_tc004_02_02", driver_id: "drv_tc004_02", arrival_place_id: "pl_001", created_at: "2026-02-08T15:10:04", ttn_number: "TTN-2026-00040", unload_date: "2026-03-19", unload_start_time: "10:20", status: "active", product_name: "Плитка керамическая", weight_ttn: 8.4, driver_phone: "+7 999 200-00-17" },
        { id: "req_drv_tc004_02_03", driver_id: "drv_tc004_02", arrival_place_id: "pl_002", created_at: "2026-02-05T11:50:23", ttn_number: "TTN-2026-00041", unload_date: "2026-02-06", unload_start_time: "16:00", status: "rejected", product_name: "Сухие смеси", weight_ttn: 12.6, driver_phone: "+7 999 200-00-17" },

        // drv_tc004_03
        { id: "req_drv_tc004_03_01", driver_id: "drv_tc004_03", arrival_place_id: "pl_003", created_at: "2026-02-01T08:30:00", ttn_number: "TTN-2026-00042", unload_date: "2026-02-02", unload_start_time: "09:00", status: "rejected", product_name: "Гипсокартон", weight_ttn: 6.1, driver_phone: "+7 999 200-00-18" },
        { id: "req_drv_tc004_03_02", driver_id: "drv_tc004_03", arrival_place_id: "pl_004", created_at: "2026-02-04T10:40:32", ttn_number: "TTN-2026-00043", unload_date: "2026-02-05", unload_start_time: "11:10", status: "accepted", product_name: "Песок строительный", weight_ttn: 20.3, driver_phone: "+7 999 200-00-18" },

        // drv_tc004_04 (has active)
        { id: "req_drv_tc004_04_01", driver_id: "drv_tc004_04", arrival_place_id: "pl_005", created_at: "2026-02-02T16:20:57", ttn_number: "TTN-2026-00044", unload_date: "2026-02-03", unload_start_time: "10:20", status: "rejected", product_name: "Цемент М500", weight_ttn: 21.2, driver_phone: "+7 999 200-00-19" },
        { id: "req_drv_tc004_04_02", driver_id: "drv_tc004_04", arrival_place_id: "pl_003", created_at: "2026-02-08T09:35:29", ttn_number: "TTN-2026-00045", unload_date: "2026-03-17", unload_start_time: "09:45", status: "active", product_name: "Щебень фр. 5-20", weight_ttn: 23.7, driver_phone: "+7 999 200-00-19" },
        { id: "req_drv_tc004_04_03", driver_id: "drv_tc004_04", arrival_place_id: "pl_004", created_at: "2026-02-05T18:05:22", ttn_number: "TTN-2026-00046", unload_date: "2026-03-06", unload_start_time: "10:00", status: "accepted", product_name: "Кирпич рядовой", weight_ttn: 13.4, driver_phone: "+7 999 200-00-19" },

        // drv_tc004_05
        { id: "req_drv_tc004_05_01", driver_id: "drv_tc004_05", arrival_place_id: "pl_001", created_at: "2026-02-03T09:55:20", ttn_number: "TTN-2026-00047", unload_date: "2026-02-04", unload_start_time: "13:10", status: "accepted", product_name: "Металлопрокат", weight_ttn: 16.4, driver_phone: "+7 999 200-00-20" },
        { id: "req_drv_tc004_05_02", driver_id: "drv_tc004_05", arrival_place_id: "pl_003", created_at: "2026-02-06T07:40:10", ttn_number: "TTN-2026-00048", unload_date: "2026-02-07", unload_start_time: "08:30", status: "rejected", product_name: "Арматура", weight_ttn: 18.1, driver_phone: "+7 999 200-00-20" },

        // drv_tc005_01 (has active)
        { id: "req_drv_tc005_01_01", driver_id: "drv_tc005_01", arrival_place_id: "pl_005", created_at: "2026-02-04T09:10:22", ttn_number: "TTN-2026-00049", unload_date: "2026-02-05", unload_start_time: "10:30", status: "accepted", product_name: "Плиты перекрытия", weight_ttn: 22.1, driver_phone: "+7 999 200-00-21" },
        { id: "req_drv_tc005_01_02", driver_id: "drv_tc005_01", arrival_place_id: "pl_004", created_at: "2026-02-08T11:00:12", ttn_number: "TTN-2026-00050", unload_date: "2026-03-17", unload_start_time: "12:00", status: "active", product_name: "Песок строительный", weight_ttn: 19.9, driver_phone: "+7 999 200-00-21" },
        { id: "req_drv_tc005_01_03", driver_id: "drv_tc005_01", arrival_place_id: "pl_001", created_at: "2026-02-02T14:40:43", ttn_number: "TTN-2026-00051", unload_date: "2026-02-03", unload_start_time: "09:50", status: "rejected", product_name: "Сухие смеси", weight_ttn: 12.1, driver_phone: "+7 999 200-00-21" },

        // drv_tc005_02
        { id: "req_drv_tc005_02_01", driver_id: "drv_tc005_02", arrival_place_id: "pl_003", created_at: "2026-02-01T11:30:00", ttn_number: "TTN-2026-00052", unload_date: "2026-02-02", unload_start_time: "14:10", status: "rejected", product_name: "Кирпич облицовочный", weight_ttn: 10.7, driver_phone: "+7 999 200-00-22" },
        { id: "req_drv_tc005_02_02", driver_id: "drv_tc005_02", arrival_place_id: "pl_004", created_at: "2026-02-05T08:05:52", ttn_number: "TTN-2026-00053", unload_date: "2026-02-06", unload_start_time: "09:30", status: "accepted", product_name: "Плитка керамическая", weight_ttn: 7.6, driver_phone: "+7 999 200-00-22" },

        // drv_tc005_03 (has active)
        { id: "req_drv_tc005_03_01", driver_id: "drv_tc005_03", arrival_place_id: "pl_005", created_at: "2026-02-03T15:05:57", ttn_number: "TTN-2026-00054", unload_date: "2026-02-04", unload_start_time: "08:40", status: "rejected", product_name: "Щебень фр. 20-40", weight_ttn: 26.3, driver_phone: "+7 999 200-00-23" },
        { id: "req_drv_tc005_03_02", driver_id: "drv_tc005_03", arrival_place_id: "pl_003", created_at: "2026-02-08T13:30:47", ttn_number: "TTN-2026-00055", unload_date: "2026-03-20", unload_start_time: "10:15", status: "active", product_name: "Цемент М500", weight_ttn: 20.6, driver_phone: "+7 999 200-00-23" },
        { id: "req_drv_tc005_03_03", driver_id: "drv_tc005_03", arrival_place_id: "pl_004", created_at: "2026-02-04T18:20:49", ttn_number: "TTN-2026-00056", unload_date: "2026-02-05", unload_start_time: "11:00", status: "accepted", product_name: "Металлопрокат", weight_ttn: 16.1, driver_phone: "+7 999 200-00-23" },

        // drv_tc005_04
        { id: "req_drv_tc005_04_01", driver_id: "drv_tc005_04", arrival_place_id: "pl_005", created_at: "2026-02-02T10:10:12", ttn_number: "TTN-2026-00057", unload_date: "2026-03-03", unload_start_time: "15:20", status: "accepted", product_name: "Арматура", weight_ttn: 18.6, driver_phone: "+7 999 200-00-24" },
        { id: "req_drv_tc005_04_02", driver_id: "drv_tc005_04", arrival_place_id: "pl_001", created_at: "2026-02-06T09:45:17", ttn_number: "TTN-2026-00058", unload_date: "2026-03-07", unload_start_time: "10:30", status: "rejected", product_name: "Гипсокартон", weight_ttn: 6.5, driver_phone: "+7 999 200-00-24" },

        // drv_tc005_05
        { id: "req_drv_tc005_05_01", driver_id: "drv_tc005_05", arrival_place_id: "pl_005", created_at: "2026-02-03T11:25:05", ttn_number: "TTN-2026-00059", unload_date: "2026-03-04", unload_start_time: "12:30", status: "rejected", product_name: "Песок строительный", weight_ttn: 18.9, driver_phone: "+7 999 200-00-25" },
        { id: "req_drv_tc005_05_02", driver_id: "drv_tc005_05", arrival_place_id: "pl_002", created_at: "2026-02-05T14:05:08", ttn_number: "TTN-2026-00060", unload_date: "2026-03-06", unload_start_time: "09:10", status: "accepted", product_name: "Сухие смеси", weight_ttn: 12.3, driver_phone: "+7 999 200-00-25" },
    ],
} as const;
