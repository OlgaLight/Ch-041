/**
 * Created by olga on 10.07.16.
 */
var app = angular.module('scheduleApp',[]);
app.controller('GroupController', function() {

    var schedule = [
        {
            "id": 0,
            "name": "Ch-05",
            "description": "In adipisicing Lorem ad et est. Consectetur ex sint sit labore amet ad aute eu proident do nisi adipisicing in non. Consequat est dolore excepteur quis adipisicing dolor ut laborum pariatur aute culpa. Adipisicing ipsum nostrud esse dolore occaecat aliquip cupidatat laborum.\r\n",
            "curriculum": [
                {
                    "day": "monday",
                    "lessons": [
                        {
                            "time": "03:49",
                            "lesson": "python"
                        },
                        {
                            "time": "08:24",
                            "lesson": "web"
                        },
                        {
                            "time": "12:05",
                            "lesson": "ruby"
                        },
                        {
                            "time": "10:26",
                            "lesson": "big data"
                        },
                        {
                            "time": "07:31",
                            "lesson": "python"
                        }
                    ]
                },
                {
                    "day": "wednesday",
                    "lessons": [
                        {
                            "time": "12:47",
                            "lesson": "ruby"
                        },
                        {
                            "time": "01:29",
                            "lesson": "java"
                        },
                        {
                            "time": "01:59",
                            "lesson": "big data"
                        },
                        {
                            "time": "05:09",
                            "lesson": "big data"
                        },
                        {
                            "time": "09:39",
                            "lesson": "web"
                        }
                    ]
                },
                {
                    "day": "friday",
                    "lessons": [
                        {
                            "time": "12:16",
                            "lesson": "python"
                        },
                        {
                            "time": "04:41",
                            "lesson": "python"
                        },
                        {
                            "time": "02:53",
                            "lesson": "python"
                        },
                        {
                            "time": "10:36",
                            "lesson": "python"
                        },
                        {
                            "time": "05:05",
                            "lesson": "python"
                        }
                    ]
                },
                {
                    "day": "wednesday",
                    "lessons": [
                        {
                            "time": "08:28",
                            "lesson": "web"
                        },
                        {
                            "time": "11:37",
                            "lesson": "big data"
                        },
                        {
                            "time": "01:27",
                            "lesson": "big data"
                        },
                        {
                            "time": "05:53",
                            "lesson": "ruby"
                        },
                        {
                            "time": "08:03",
                            "lesson": "web"
                        }
                    ]
                },
                {
                    "day": "friday",
                    "lessons": [
                        {
                            "time": "04:23",
                            "lesson": "ruby"
                        },
                        {
                            "time": "04:02",
                            "lesson": "web"
                        },
                        {
                            "time": "06:29",
                            "lesson": "java"
                        },
                        {
                            "time": "06:47",
                            "lesson": "big data"
                        },
                        {
                            "time": "04:43",
                            "lesson": "python"
                        }
                    ]
                },
                {
                    "day": "monday",
                    "lessons": [
                        {
                            "time": "02:57",
                            "lesson": "python"
                        },
                        {
                            "time": "12:59",
                            "lesson": "java"
                        },
                        {
                            "time": "01:06",
                            "lesson": "web"
                        },
                        {
                            "time": "08:49",
                            "lesson": "web"
                        },
                        {
                            "time": "03:49",
                            "lesson": "python"
                        }
                    ]
                },
                {
                    "day": "wednesday",
                    "lessons": [
                        {
                            "time": "11:50",
                            "lesson": "ruby"
                        },
                        {
                            "time": "10:54",
                            "lesson": "ruby"
                        },
                        {
                            "time": "09:47",
                            "lesson": "web"
                        },
                        {
                            "time": "02:05",
                            "lesson": "ruby"
                        },
                        {
                            "time": "11:53",
                            "lesson": "ruby"
                        }
                    ]
                },
                {
                    "day": "tuesday",
                    "lessons": [
                        {
                            "time": "07:31",
                            "lesson": "java"
                        },
                        {
                            "time": "10:01",
                            "lesson": "web"
                        },
                        {
                            "time": "06:55",
                            "lesson": "ruby"
                        },
                        {
                            "time": "03:50",
                            "lesson": "python"
                        },
                        {
                            "time": "08:24",
                            "lesson": "web"
                        }
                    ]
                },
                {
                    "day": "friday",
                    "lessons": [
                        {
                            "time": "08:18",
                            "lesson": "python"
                        },
                        {
                            "time": "11:41",
                            "lesson": "python"
                        },
                        {
                            "time": "03:49",
                            "lesson": "java"
                        },
                        {
                            "time": "11:10",
                            "lesson": "ruby"
                        },
                        {
                            "time": "11:41",
                            "lesson": "ruby"
                        }
                    ]
                },
                {
                    "day": "thursday",
                    "lessons": [
                        {
                            "time": "09:50",
                            "lesson": "java"
                        },
                        {
                            "time": "08:58",
                            "lesson": "java"
                        },
                        {
                            "time": "07:14",
                            "lesson": "java"
                        },
                        {
                            "time": "06:41",
                            "lesson": "java"
                        },
                        {
                            "time": "06:45",
                            "lesson": "big data"
                        }
                    ]
                }
            ]
        },
        {
            "id": 1,
            "name": "Ch-05",
            "description": "Id ipsum consectetur magna nisi. Non est ipsum ad dolor id Lorem nulla et officia proident culpa. Eu cupidatat irure aute irure. Anim enim ut anim nostrud sunt non sit eiusmod esse ea.\r\n",
            "curriculum": [
                {
                    "day": "friday",
                    "lessons": [
                        {
                            "time": "03:06",
                            "lesson": "big data"
                        },
                        {
                            "time": "09:08",
                            "lesson": "big data"
                        },
                        {
                            "time": "04:26",
                            "lesson": "web"
                        },
                        {
                            "time": "07:45",
                            "lesson": "python"
                        },
                        {
                            "time": "07:59",
                            "lesson": "python"
                        }
                    ]
                },
                {
                    "day": "wednesday",
                    "lessons": [
                        {
                            "time": "07:25",
                            "lesson": "java"
                        },
                        {
                            "time": "08:38",
                            "lesson": "web"
                        },
                        {
                            "time": "02:24",
                            "lesson": "java"
                        },
                        {
                            "time": "05:26",
                            "lesson": "java"
                        },
                        {
                            "time": "01:12",
                            "lesson": "web"
                        }
                    ]
                },
                {
                    "day": "monday",
                    "lessons": [
                        {
                            "time": "08:10",
                            "lesson": "ruby"
                        },
                        {
                            "time": "09:43",
                            "lesson": "python"
                        },
                        {
                            "time": "04:24",
                            "lesson": "web"
                        },
                        {
                            "time": "11:01",
                            "lesson": "java"
                        },
                        {
                            "time": "12:35",
                            "lesson": "big data"
                        }
                    ]
                },
                {
                    "day": "tuesday",
                    "lessons": [
                        {
                            "time": "05:42",
                            "lesson": "python"
                        },
                        {
                            "time": "03:18",
                            "lesson": "web"
                        },
                        {
                            "time": "04:30",
                            "lesson": "ruby"
                        },
                        {
                            "time": "09:07",
                            "lesson": "ruby"
                        },
                        {
                            "time": "09:20",
                            "lesson": "web"
                        }
                    ]
                },
                {
                    "day": "monday",
                    "lessons": [
                        {
                            "time": "08:28",
                            "lesson": "big data"
                        },
                        {
                            "time": "10:42",
                            "lesson": "python"
                        },
                        {
                            "time": "06:52",
                            "lesson": "ruby"
                        },
                        {
                            "time": "08:02",
                            "lesson": "python"
                        },
                        {
                            "time": "09:04",
                            "lesson": "ruby"
                        }
                    ]
                },
                {
                    "day": "tuesday",
                    "lessons": [
                        {
                            "time": "07:46",
                            "lesson": "ruby"
                        },
                        {
                            "time": "09:06",
                            "lesson": "ruby"
                        },
                        {
                            "time": "04:16",
                            "lesson": "big data"
                        },
                        {
                            "time": "06:38",
                            "lesson": "big data"
                        },
                        {
                            "time": "05:56",
                            "lesson": "ruby"
                        }
                    ]
                },
                {
                    "day": "friday",
                    "lessons": [
                        {
                            "time": "03:36",
                            "lesson": "python"
                        },
                        {
                            "time": "01:52",
                            "lesson": "python"
                        },
                        {
                            "time": "08:06",
                            "lesson": "web"
                        },
                        {
                            "time": "05:13",
                            "lesson": "python"
                        },
                        {
                            "time": "01:42",
                            "lesson": "web"
                        }
                    ]
                },
                {
                    "day": "thursday",
                    "lessons": [
                        {
                            "time": "03:24",
                            "lesson": "web"
                        },
                        {
                            "time": "01:03",
                            "lesson": "java"
                        },
                        {
                            "time": "05:10",
                            "lesson": "big data"
                        },
                        {
                            "time": "12:22",
                            "lesson": "web"
                        },
                        {
                            "time": "09:34",
                            "lesson": "python"
                        }
                    ]
                },
                {
                    "day": "tuesday",
                    "lessons": [
                        {
                            "time": "12:54",
                            "lesson": "big data"
                        },
                        {
                            "time": "09:13",
                            "lesson": "java"
                        },
                        {
                            "time": "09:14",
                            "lesson": "ruby"
                        },
                        {
                            "time": "07:05",
                            "lesson": "ruby"
                        },
                        {
                            "time": "06:08",
                            "lesson": "python"
                        }
                    ]
                },
                {
                    "day": "thursday",
                    "lessons": [
                        {
                            "time": "05:01",
                            "lesson": "java"
                        },
                        {
                            "time": "04:00",
                            "lesson": "big data"
                        },
                        {
                            "time": "10:35",
                            "lesson": "big data"
                        },
                        {
                            "time": "07:54",
                            "lesson": "ruby"
                        },
                        {
                            "time": "02:10",
                            "lesson": "big data"
                        }
                    ]
                }
            ]
        },
        {
            "id": 2,
            "name": "Ch-03",
            "description": "Pariatur nostrud adipisicing ea nostrud veniam non duis incididunt cupidatat eiusmod amet. Irure anim esse reprehenderit laboris nisi aliquip consequat eiusmod tempor ex occaecat. Magna amet sit amet duis deserunt ullamco quis qui. Et pariatur nostrud dolore enim cupidatat sit consectetur eiusmod ad. Incididunt voluptate elit reprehenderit est ut consequat.\r\n",
            "curriculum": [
                {
                    "day": "monday",
                    "lessons": [
                        {
                            "time": "09:12",
                            "lesson": "big data"
                        },
                        {
                            "time": "09:16",
                            "lesson": "java"
                        },
                        {
                            "time": "07:26",
                            "lesson": "java"
                        },
                        {
                            "time": "12:29",
                            "lesson": "web"
                        },
                        {
                            "time": "02:14",
                            "lesson": "python"
                        }
                    ]
                },
                {
                    "day": "tuesday",
                    "lessons": [
                        {
                            "time": "03:48",
                            "lesson": "python"
                        },
                        {
                            "time": "10:56",
                            "lesson": "web"
                        },
                        {
                            "time": "09:56",
                            "lesson": "big data"
                        },
                        {
                            "time": "05:50",
                            "lesson": "web"
                        },
                        {
                            "time": "04:50",
                            "lesson": "ruby"
                        }
                    ]
                },
                {
                    "day": "tuesday",
                    "lessons": [
                        {
                            "time": "02:50",
                            "lesson": "big data"
                        },
                        {
                            "time": "03:03",
                            "lesson": "big data"
                        },
                        {
                            "time": "08:29",
                            "lesson": "ruby"
                        },
                        {
                            "time": "11:21",
                            "lesson": "python"
                        },
                        {
                            "time": "11:37",
                            "lesson": "python"
                        }
                    ]
                },
                {
                    "day": "tuesday",
                    "lessons": [
                        {
                            "time": "03:48",
                            "lesson": "java"
                        },
                        {
                            "time": "10:40",
                            "lesson": "python"
                        },
                        {
                            "time": "10:05",
                            "lesson": "ruby"
                        },
                        {
                            "time": "07:25",
                            "lesson": "python"
                        },
                        {
                            "time": "06:43",
                            "lesson": "big data"
                        }
                    ]
                },
                {
                    "day": "monday",
                    "lessons": [
                        {
                            "time": "12:55",
                            "lesson": "python"
                        },
                        {
                            "time": "03:21",
                            "lesson": "java"
                        },
                        {
                            "time": "03:48",
                            "lesson": "python"
                        },
                        {
                            "time": "07:41",
                            "lesson": "python"
                        },
                        {
                            "time": "04:42",
                            "lesson": "web"
                        }
                    ]
                },
                {
                    "day": "thursday",
                    "lessons": [
                        {
                            "time": "03:11",
                            "lesson": "web"
                        },
                        {
                            "time": "12:23",
                            "lesson": "web"
                        },
                        {
                            "time": "04:11",
                            "lesson": "web"
                        },
                        {
                            "time": "08:55",
                            "lesson": "ruby"
                        },
                        {
                            "time": "02:56",
                            "lesson": "big data"
                        }
                    ]
                },
                {
                    "day": "thursday",
                    "lessons": [
                        {
                            "time": "10:54",
                            "lesson": "ruby"
                        },
                        {
                            "time": "06:30",
                            "lesson": "ruby"
                        },
                        {
                            "time": "08:56",
                            "lesson": "python"
                        },
                        {
                            "time": "03:38",
                            "lesson": "python"
                        },
                        {
                            "time": "09:29",
                            "lesson": "big data"
                        }
                    ]
                },
                {
                    "day": "monday",
                    "lessons": [
                        {
                            "time": "01:51",
                            "lesson": "web"
                        },
                        {
                            "time": "06:59",
                            "lesson": "java"
                        },
                        {
                            "time": "04:57",
                            "lesson": "python"
                        },
                        {
                            "time": "05:11",
                            "lesson": "python"
                        },
                        {
                            "time": "03:18",
                            "lesson": "java"
                        }
                    ]
                },
                {
                    "day": "wednesday",
                    "lessons": [
                        {
                            "time": "01:14",
                            "lesson": "big data"
                        },
                        {
                            "time": "05:23",
                            "lesson": "java"
                        },
                        {
                            "time": "03:04",
                            "lesson": "python"
                        },
                        {
                            "time": "09:11",
                            "lesson": "java"
                        },
                        {
                            "time": "05:27",
                            "lesson": "big data"
                        }
                    ]
                },
                {
                    "day": "friday",
                    "lessons": [
                        {
                            "time": "12:55",
                            "lesson": "python"
                        },
                        {
                            "time": "11:00",
                            "lesson": "web"
                        },
                        {
                            "time": "04:48",
                            "lesson": "java"
                        },
                        {
                            "time": "09:10",
                            "lesson": "python"
                        },
                        {
                            "time": "12:20",
                            "lesson": "ruby"
                        }
                    ]
                }
            ]
        },
        {
            "id": 3,
            "name": "Ch-02",
            "description": "Id mollit enim do esse incididunt elit irure in. Aliqua anim consequat labore id. Ut est dolor officia pariatur ullamco aliqua. Elit occaecat ex voluptate mollit sunt labore incididunt. Qui quis velit elit velit ipsum. Ut minim fugiat in ea esse ea exercitation ipsum qui in tempor eiusmod amet consectetur. Laboris duis occaecat enim quis do duis ipsum quis exercitation deserunt dolore in voluptate.\r\n",
            "curriculum": [
                {
                    "day": "monday",
                    "lessons": [
                        {
                            "time": "12:57",
                            "lesson": "java"
                        },
                        {
                            "time": "06:39",
                            "lesson": "ruby"
                        },
                        {
                            "time": "12:35",
                            "lesson": "web"
                        },
                        {
                            "time": "12:48",
                            "lesson": "java"
                        },
                        {
                            "time": "02:32",
                            "lesson": "big data"
                        }
                    ]
                },
                {
                    "day": "tuesday",
                    "lessons": [
                        {
                            "time": "12:20",
                            "lesson": "big data"
                        },
                        {
                            "time": "12:47",
                            "lesson": "python"
                        },
                        {
                            "time": "04:24",
                            "lesson": "ruby"
                        },
                        {
                            "time": "10:37",
                            "lesson": "python"
                        },
                        {
                            "time": "01:17",
                            "lesson": "python"
                        }
                    ]
                },
                {
                    "day": "monday",
                    "lessons": [
                        {
                            "time": "04:36",
                            "lesson": "big data"
                        },
                        {
                            "time": "04:38",
                            "lesson": "python"
                        },
                        {
                            "time": "08:05",
                            "lesson": "web"
                        },
                        {
                            "time": "01:07",
                            "lesson": "ruby"
                        },
                        {
                            "time": "12:59",
                            "lesson": "big data"
                        }
                    ]
                },
                {
                    "day": "tuesday",
                    "lessons": [
                        {
                            "time": "05:24",
                            "lesson": "python"
                        },
                        {
                            "time": "08:22",
                            "lesson": "java"
                        },
                        {
                            "time": "04:38",
                            "lesson": "web"
                        },
                        {
                            "time": "06:28",
                            "lesson": "java"
                        },
                        {
                            "time": "10:30",
                            "lesson": "python"
                        }
                    ]
                },
                {
                    "day": "monday",
                    "lessons": [
                        {
                            "time": "05:04",
                            "lesson": "python"
                        },
                        {
                            "time": "08:35",
                            "lesson": "web"
                        },
                        {
                            "time": "12:17",
                            "lesson": "web"
                        },
                        {
                            "time": "04:59",
                            "lesson": "java"
                        },
                        {
                            "time": "06:59",
                            "lesson": "python"
                        }
                    ]
                },
                {
                    "day": "monday",
                    "lessons": [
                        {
                            "time": "09:38",
                            "lesson": "big data"
                        },
                        {
                            "time": "10:00",
                            "lesson": "python"
                        },
                        {
                            "time": "03:40",
                            "lesson": "big data"
                        },
                        {
                            "time": "12:57",
                            "lesson": "java"
                        },
                        {
                            "time": "06:42",
                            "lesson": "big data"
                        }
                    ]
                },
                {
                    "day": "tuesday",
                    "lessons": [
                        {
                            "time": "10:35",
                            "lesson": "python"
                        },
                        {
                            "time": "06:56",
                            "lesson": "ruby"
                        },
                        {
                            "time": "08:47",
                            "lesson": "ruby"
                        },
                        {
                            "time": "11:49",
                            "lesson": "web"
                        },
                        {
                            "time": "10:29",
                            "lesson": "java"
                        }
                    ]
                },
                {
                    "day": "thursday",
                    "lessons": [
                        {
                            "time": "12:25",
                            "lesson": "web"
                        },
                        {
                            "time": "08:59",
                            "lesson": "java"
                        },
                        {
                            "time": "11:14",
                            "lesson": "ruby"
                        },
                        {
                            "time": "07:40",
                            "lesson": "java"
                        },
                        {
                            "time": "06:34",
                            "lesson": "python"
                        }
                    ]
                },
                {
                    "day": "friday",
                    "lessons": [
                        {
                            "time": "11:58",
                            "lesson": "python"
                        },
                        {
                            "time": "07:19",
                            "lesson": "web"
                        },
                        {
                            "time": "02:29",
                            "lesson": "python"
                        },
                        {
                            "time": "06:16",
                            "lesson": "python"
                        },
                        {
                            "time": "07:49",
                            "lesson": "big data"
                        }
                    ]
                },
                {
                    "day": "thursday",
                    "lessons": [
                        {
                            "time": "01:11",
                            "lesson": "ruby"
                        },
                        {
                            "time": "03:28",
                            "lesson": "big data"
                        },
                        {
                            "time": "11:21",
                            "lesson": "python"
                        },
                        {
                            "time": "06:30",
                            "lesson": "ruby"
                        },
                        {
                            "time": "04:03",
                            "lesson": "web"
                        }
                    ]
                }
            ]
        },
        {
            "id": 4,
            "name": "Ch-04",
            "description": "Exercitation culpa minim ad aliqua commodo enim. Nostrud dolor tempor minim anim minim sint aliquip nostrud in esse consectetur. Ullamco sunt magna nulla adipisicing ipsum in eiusmod esse incididunt. Aliquip ullamco culpa ea deserunt anim aute sunt aliqua. Excepteur qui proident est reprehenderit ut proident.\r\n",
            "curriculum": [
                {
                    "day": "thursday",
                    "lessons": [
                        {
                            "time": "03:28",
                            "lesson": "web"
                        },
                        {
                            "time": "04:35",
                            "lesson": "big data"
                        },
                        {
                            "time": "12:17",
                            "lesson": "python"
                        },
                        {
                            "time": "11:28",
                            "lesson": "python"
                        },
                        {
                            "time": "07:52",
                            "lesson": "java"
                        }
                    ]
                },
                {
                    "day": "wednesday",
                    "lessons": [
                        {
                            "time": "03:06",
                            "lesson": "big data"
                        },
                        {
                            "time": "12:44",
                            "lesson": "ruby"
                        },
                        {
                            "time": "02:02",
                            "lesson": "big data"
                        },
                        {
                            "time": "05:22",
                            "lesson": "ruby"
                        },
                        {
                            "time": "08:42",
                            "lesson": "web"
                        }
                    ]
                },
                {
                    "day": "friday",
                    "lessons": [
                        {
                            "time": "10:10",
                            "lesson": "java"
                        },
                        {
                            "time": "09:56",
                            "lesson": "ruby"
                        },
                        {
                            "time": "10:32",
                            "lesson": "python"
                        },
                        {
                            "time": "12:27",
                            "lesson": "java"
                        },
                        {
                            "time": "01:06",
                            "lesson": "python"
                        }
                    ]
                },
                {
                    "day": "monday",
                    "lessons": [
                        {
                            "time": "04:09",
                            "lesson": "big data"
                        },
                        {
                            "time": "04:13",
                            "lesson": "python"
                        },
                        {
                            "time": "08:08",
                            "lesson": "big data"
                        },
                        {
                            "time": "04:48",
                            "lesson": "java"
                        },
                        {
                            "time": "05:27",
                            "lesson": "ruby"
                        }
                    ]
                },
                {
                    "day": "thursday",
                    "lessons": [
                        {
                            "time": "06:37",
                            "lesson": "big data"
                        },
                        {
                            "time": "06:34",
                            "lesson": "python"
                        },
                        {
                            "time": "12:36",
                            "lesson": "python"
                        },
                        {
                            "time": "06:40",
                            "lesson": "web"
                        },
                        {
                            "time": "06:08",
                            "lesson": "java"
                        }
                    ]
                },
                {
                    "day": "friday",
                    "lessons": [
                        {
                            "time": "05:02",
                            "lesson": "web"
                        },
                        {
                            "time": "11:33",
                            "lesson": "java"
                        },
                        {
                            "time": "04:09",
                            "lesson": "web"
                        },
                        {
                            "time": "02:20",
                            "lesson": "web"
                        },
                        {
                            "time": "02:52",
                            "lesson": "big data"
                        }
                    ]
                },
                {
                    "day": "friday",
                    "lessons": [
                        {
                            "time": "07:38",
                            "lesson": "web"
                        },
                        {
                            "time": "06:13",
                            "lesson": "ruby"
                        },
                        {
                            "time": "12:48",
                            "lesson": "big data"
                        },
                        {
                            "time": "03:49",
                            "lesson": "java"
                        },
                        {
                            "time": "08:34",
                            "lesson": "java"
                        }
                    ]
                },
                {
                    "day": "thursday",
                    "lessons": [
                        {
                            "time": "10:18",
                            "lesson": "java"
                        },
                        {
                            "time": "08:05",
                            "lesson": "python"
                        },
                        {
                            "time": "12:08",
                            "lesson": "java"
                        },
                        {
                            "time": "07:51",
                            "lesson": "big data"
                        },
                        {
                            "time": "09:15",
                            "lesson": "ruby"
                        }
                    ]
                },
                {
                    "day": "friday",
                    "lessons": [
                        {
                            "time": "09:18",
                            "lesson": "web"
                        },
                        {
                            "time": "03:20",
                            "lesson": "big data"
                        },
                        {
                            "time": "11:15",
                            "lesson": "ruby"
                        },
                        {
                            "time": "01:45",
                            "lesson": "web"
                        },
                        {
                            "time": "02:11",
                            "lesson": "web"
                        }
                    ]
                },
                {
                    "day": "friday",
                    "lessons": [
                        {
                            "time": "11:34",
                            "lesson": "java"
                        },
                        {
                            "time": "11:28",
                            "lesson": "python"
                        },
                        {
                            "time": "12:05",
                            "lesson": "web"
                        },
                        {
                            "time": "10:01",
                            "lesson": "web"
                        },
                        {
                            "time": "07:58",
                            "lesson": "ruby"
                        }
                    ]
                }
            ]
        }
    ]

});