const BoardsManager = {
    data:[
        { // 1
            startPoints:[
                {
                    startX: [-300,-150,0],
                    startY: [1100],
                    rotation: 270, // left: 0, down: 270, right:180, up:90
                    vx:0,   
                    vy:-150
                },
                {
                    startX: [800],
                    startY: [-100,-250,-400],
                    rotation: 0,
                    vx:-120,
                    vy:0
                },
            ],

            cashLines:[
                {
                    x: -400,
                    y: -240,
                    rotation: 90, // left: 90, down: 360, right: 270, up: 180
                    longScale: 0.95,
                },
                {
                    x: -150,
                    y: -500,
                    rotation: 360,
                    longScale: 0.95,
                }
            ]
        },
        { // 2
            startPoints:[
                {
                    startX: [-270,-120],
                    startY: [-1100],
                    rotation: 90,
                    vx:0,
                    vy:200
                },
                {
                    startX: [700],
                    startY: [170,30,-110,-250],
                    rotation: 0,
                    vx:-200,   
                    vy:0
                },
            ],
            cashLines:[
                {
                    x: -198,
                    y: 284,
                    rotation: 180, // left: 90, down: 360, right: 270, up: 180
                    longScale: 0.65,
                },
                {
                    x: -390,
                    y: -47,
                    rotation: 90,
                    longScale: 1.3,
                }
            ]
        },
        { // 3
            startPoints:[
                {
                    startX: [-60],
                    startY: [1100],
                    rotation: 270,
                    vx:0,   
                    vy:-200
                },
                {
                    startX: [70],
                    startY: [-1100],
                    rotation: 90,
                    vx:0,   
                    vy:200
                },
                {
                    startX: [650],
                    startY: [170],
                    rotation: 0,
                    vx:-200,   
                    vy:0
                },
                {
                    startX: [-650],
                    startY: [20],
                    rotation: 180,
                    vx:200,
                    vy:0
                },
            ],
            cashLines:[
                {
                    x: -200,
                    y: 96,
                    rotation: 90, // left: 90, down: 360, right: 270, up: 180
                    longScale: 0.63,
                },
                {
                    x: 200, 
                    y: 96,
                    rotation: 270,
                    longScale: 0.63,
                },
                {
                    x: 0,
                    y: 280,
                    rotation: 180,
                    longScale: 0.63,
                },
                {
                    x: 0,
                    y: -100,
                    rotation: 360,
                    longScale: 0.63,
                }
            ]
        },
        { // 4
            startPoints:[
                {
                    startX: [-270],
                    startY: [1100],
                    rotation: 270,
                    vx:0,
                    vy:-200
                },
                {
                    startX: [-130],  // left: 0, down: 270, right:180, up:90
                    startY: [-1100],
                    rotation: 90,
                    vx:0,
                    vy:200
                },
                {
                    startX: [630],
                    startY: [170,30,-110,-250],
                    rotation: 0,
                    vx:-200,
                    vy:0
                },
            ],
            cashLines:[
                {
                    x: -390,
                    y: -46,
                    rotation: 90, // left: 90, down: 360, right: 270, up: 180
                    longScale: 1.28,
                },
                {
                    x: -197,
                    y: 290,
                    rotation: 180,
                    longScale: 0.63,
                },
                {
                    x: -197,
                    y: -386,
                    rotation: 360,
                    longScale: 0.63,
                }
            ]
        },
        { // 5
            startPoints:[
                {
                    startX: [640],
                    startY: [800],
                    rotation: 315,
                    vx:-100,
                    vy:-100
                },
                {
                    startX: [-620],
                    startY: [-660],
                    rotation: 135,
                    vx:100,
                    vy:100
                },
                {
                    startX: [660],
                    startY: [-490],
                    rotation: 45,
                    vx:-100,
                    vy:100
                },
                {
                    startX: [-630],
                    startY: [590],
                    rotation: 225,
                    vx:100,
                    vy:-100
                }
            ],
            cashLines:[
                {
                    x: -149,
                    y: -81,
                    rotation: 405,
                    longScale: 0.65,
                },
                {
                    x: 144,
                    y: 208,
                    rotation: 225,
                    longScale: 0.65,
                },
                {
                    x: -141,
                    y: 206,
                    rotation: 135,
                    longScale: 0.65,
                },
                {
                    x: 141,
                    y: -78,
                    rotation: 315,
                    longScale: 0.63,
                }
            ]
        },
        { // 6
            startPoints:[
                {
                    startX: [120],
                    startY: [1100],
                    rotation: 270, // left: 0, down: 270, right:180, up:90
                    vx:0,
                    vy:-200
                },
                {
                    startX: [270],
                    startY: [-1100],
                    rotation: 90,
                    vx:0,
                    vy:200
                },
                {
                    startX: [-640],
                    startY: [160,10,-115,-230],
                    rotation: 180,
                    vx:200,
                    vy:0
                }
            ],
            cashLines:[ 
                {
                    x: 197,
                    y: -389,
                    rotation: 360, // left: 90, down: 360, right: 270, up: 180
                    longScale: 0.65,
                },
                {
                    x: 197,
                    y: 293,
                    rotation: 180,
                    longScale: 0.65,
                },
                {
                    x: 390,
                    y: -44,
                    rotation: 270,
                    longScale: 1.28,
                }
            ]
        },
        { // 7
            startPoints:[
                {
                    startX: [625],
                    startY: [-100,-240,-275],
                    rotation: 0, // left: 0, down: 270, right:180, up:90
                    vx:-200,
                    vy:0
                },
                {
                    startX: [-285,-140,-2],
                    startY: [1100],
                    rotation: 270,
                    vx:0,
                    vy:-200
                }
            ],
            cashLines:[
                {
                    x: -149,
                    y: -510,
                    rotation: 360, // left: 90, down: 360, right: 270, up: 180
                    longScale: 0.95,
                },
                {
                    x: -410,
                    y: -240,
                    rotation: 90,
                    longScale: 0.95,
                }
            ]
        },
        { // 8
            startPoints:[
                {
                    startX: [75],
                    startY: [-1100],
                    rotation: 90, // left: 0, down: 270, right:180, up:90
                    vx:0,
                    vy:200
                },
                {
                    startX: [-75],
                    startY: [1100],
                    rotation: 270,
                    vx:0,
                    vy:-200
                },
                {
                    startX: [-1100],
                    startY: [20],
                    rotation: 180, // left: 0, down: 270, right:180, up:90
                    vx:200,
                    vy:0
                },
                {
                    startX: [1100],
                    startY: [160],
                    rotation: 0,
                    vx:-200,
                    vy:0
                }
            ],
            cashLines:[
                {
                    x: -203,
                    y: 95,
                    rotation: 90, // left: 90, down: 360, right: 270, up: 180
                    longScale: 0.65,
                },
                {
                    x: 203,
                    y: 95,
                    rotation: 270,
                    longScale: 0.65,
                },
                {
                    x: 2,
                    y: 300,
                    rotation: 180, // left: 90, down: 360, right: 270, up: 180
                    longScale: 0.65,
                },
                {
                    x: 2,
                    y: -110,
                    rotation: 360,
                    longScale: 0.65,
                }
            ]
        },
        { // 9
            startPoints:[
                {
                    startX: [640],
                    startY: [-460],
                    rotation: 45, // left: 0, down: 270, right:180, up:90
                    vx:-100,
                    vy:100
                },
                {
                    startX: [-680],
                    startY: [640],
                    rotation: 225,
                    vx:100,
                    vy:-100
                },
                {
                    startX: [687],
                    startY: [841],
                    rotation: 315, // left: 0, down: 270, right:180, up:90
                    vx:-100,
                    vy:-100
                },
                {
                    startX: [-723],
                    startY: [-752],
                    rotation: 135,
                    vx:100,
                    vy:100
                }
            ],
            cashLines:[
                {
                    x: -143,
                    y: 209,
                    rotation: 135, // left: 90, down: 360, right: 270, up: 180
                    longScale: 0.65,
                },
                {
                    x: 145,
                    y: -80,
                    rotation: 315,
                    longScale: 0.65,
                },
                {
                    x: -147,
                    y: -80,
                    rotation: 405, // left: 90, down: 360, right: 270, up: 180
                    longScale: 0.65,
                },
                {
                    x: 144,
                    y: 210,
                    rotation: 225,
                    longScale: 0.65,
                }
            ]
        },
        { // 10
            startPoints:[
                {
                    startX: [640],
                    startY: [-460],
                    rotation: 45, // left: 0, down: 270, right:180, up:90
                    vx:-100,
                    vy:100
                },
                {
                    startX: [-680],
                    startY: [640],
                    rotation: 225,
                    vx:100,
                    vy:-100
                },
                {
                    startX: [687],
                    startY: [841],
                    rotation: 315, // left: 0, down: 270, right:180, up:90
                    vx:-100,
                    vy:-100
                },
                {
                    startX: [-723],
                    startY: [-752],
                    rotation: 135,
                    vx:100,
                    vy:100
                }
            ],
            cashLines:[
                {
                    x: -143,
                    y: 209,
                    rotation: 135, // left: 90, down: 360, right: 270, up: 180
                    longScale: 0.65,
                },
                {
                    x: 145,
                    y: -80,
                    rotation: 315,
                    longScale: 0.65,
                },
                {
                    x: -147,
                    y: -80,
                    rotation: 405, // left: 90, down: 360, right: 270, up: 180
                    longScale: 0.65,
                },
                {
                    x: 144,
                    y: 210,
                    rotation: 225,
                    longScale: 0.65,
                }
            ]
        },
        { // 10
            startPoints:[
                {
                    startX: [640],
                    startY: [-460],
                    rotation: 45, // left: 0, down: 270, right:180, up:90
                    vx:-100,
                    vy:100
                },
                {
                    startX: [-680],
                    startY: [640],
                    rotation: 225,
                    vx:100,
                    vy:-100
                },
                {
                    startX: [687],
                    startY: [841],
                    rotation: 315, // left: 0, down: 270, right:180, up:90
                    vx:-100,
                    vy:-100
                },
                {
                    startX: [-723],
                    startY: [-752],
                    rotation: 135,
                    vx:100,
                    vy:100
                }
            ],
            cashLines:[
                {
                    x: -143,
                    y: 209,
                    rotation: 135, // left: 90, down: 360, right: 270, up: 180
                    longScale: 0.65,
                },
                {
                    x: 145,
                    y: -80,
                    rotation: 315,
                    longScale: 0.65,
                },
                {
                    x: -147,
                    y: -80,
                    rotation: 405, // left: 90, down: 360, right: 270, up: 180
                    longScale: 0.65,
                },
                {
                    x: 144,
                    y: 210,
                    rotation: 225,
                    longScale: 0.65,
                }
            ]
        },{ // 10
            startPoints:[
                {
                    startX: [640],
                    startY: [-460],
                    rotation: 45, // left: 0, down: 270, right:180, up:90
                    vx:-100,
                    vy:100
                },
                {
                    startX: [-680],
                    startY: [640],
                    rotation: 225,
                    vx:100,
                    vy:-100
                },
                {
                    startX: [687],
                    startY: [841],
                    rotation: 315, // left: 0, down: 270, right:180, up:90
                    vx:-100,
                    vy:-100
                },
                {
                    startX: [-723],
                    startY: [-752],
                    rotation: 135,
                    vx:100,
                    vy:100
                }
            ],
            cashLines:[
                {
                    x: -143,
                    y: 209,
                    rotation: 135, // left: 90, down: 360, right: 270, up: 180
                    longScale: 0.65,
                },
                {
                    x: 145,
                    y: -80,
                    rotation: 315,
                    longScale: 0.65,
                },
                {
                    x: -147,
                    y: -80,
                    rotation: 405, // left: 90, down: 360, right: 270, up: 180
                    longScale: 0.65,
                },
                {
                    x: 144,
                    y: 210,
                    rotation: 225,
                    longScale: 0.65,
                }
            ]
        },{ // 10
            startPoints:[
                {
                    startX: [640],
                    startY: [-460],
                    rotation: 45, // left: 0, down: 270, right:180, up:90
                    vx:-100,
                    vy:100
                },
                {
                    startX: [-680],
                    startY: [640],
                    rotation: 225,
                    vx:100,
                    vy:-100
                },
                {
                    startX: [687],
                    startY: [841],
                    rotation: 315, // left: 0, down: 270, right:180, up:90
                    vx:-100,
                    vy:-100
                },
                {
                    startX: [-723],
                    startY: [-752],
                    rotation: 135,
                    vx:100,
                    vy:100
                }
            ],
            cashLines:[
                {
                    x: -143,
                    y: 209,
                    rotation: 135, // left: 90, down: 360, right: 270, up: 180
                    longScale: 0.65,
                },
                {
                    x: 145,
                    y: -80,
                    rotation: 315,
                    longScale: 0.65,
                },
                {
                    x: -147,
                    y: -80,
                    rotation: 405, // left: 90, down: 360, right: 270, up: 180
                    longScale: 0.65,
                },
                {
                    x: 144,
                    y: 210,
                    rotation: 225,
                    longScale: 0.65,
                }
            ]
        },{ // 10
            startPoints:[
                {
                    startX: [640],
                    startY: [-460],
                    rotation: 45, // left: 0, down: 270, right:180, up:90
                    vx:-100,
                    vy:100
                },
                {
                    startX: [-680],
                    startY: [640],
                    rotation: 225,
                    vx:100,
                    vy:-100
                },
                {
                    startX: [687],
                    startY: [841],
                    rotation: 315, // left: 0, down: 270, right:180, up:90
                    vx:-100,
                    vy:-100
                },
                {
                    startX: [-723],
                    startY: [-752],
                    rotation: 135,
                    vx:100,
                    vy:100
                }
            ],
            cashLines:[
                {
                    x: -143,
                    y: 209,
                    rotation: 135, // left: 90, down: 360, right: 270, up: 180
                    longScale: 0.65,
                },
                {
                    x: 145,
                    y: -80,
                    rotation: 315,
                    longScale: 0.65,
                },
                {
                    x: -147,
                    y: -80,
                    rotation: 405, // left: 90, down: 360, right: 270, up: 180
                    longScale: 0.65,
                },
                {
                    x: 144,
                    y: 210,
                    rotation: 225,
                    longScale: 0.65,
                }
            ]
        },{ // 10
            startPoints:[
                {
                    startX: [640],
                    startY: [-460],
                    rotation: 45, // left: 0, down: 270, right:180, up:90
                    vx:-100,
                    vy:100
                },
                {
                    startX: [-680],
                    startY: [640],
                    rotation: 225,
                    vx:100,
                    vy:-100
                },
                {
                    startX: [687],
                    startY: [841],
                    rotation: 315, // left: 0, down: 270, right:180, up:90
                    vx:-100,
                    vy:-100
                },
                {
                    startX: [-723],
                    startY: [-752],
                    rotation: 135,
                    vx:100,
                    vy:100
                }
            ],
            cashLines:[
                {
                    x: -143,
                    y: 209,
                    rotation: 135, // left: 90, down: 360, right: 270, up: 180
                    longScale: 0.65,
                },
                {
                    x: 145,
                    y: -80,
                    rotation: 315,
                    longScale: 0.65,
                },
                {
                    x: -147,
                    y: -80,
                    rotation: 405, // left: 90, down: 360, right: 270, up: 180
                    longScale: 0.65,
                },
                {
                    x: 144,
                    y: 210,
                    rotation: 225,
                    longScale: 0.65,
                }
            ]
        },{ // 10
            startPoints:[
                {
                    startX: [640],
                    startY: [-460],
                    rotation: 45, // left: 0, down: 270, right:180, up:90
                    vx:-100,
                    vy:100
                },
                {
                    startX: [-680],
                    startY: [640],
                    rotation: 225,
                    vx:100,
                    vy:-100
                },
                {
                    startX: [687],
                    startY: [841],
                    rotation: 315, // left: 0, down: 270, right:180, up:90
                    vx:-100,
                    vy:-100
                },
                {
                    startX: [-723],
                    startY: [-752],
                    rotation: 135,
                    vx:100,
                    vy:100
                }
            ],
            cashLines:[
                {
                    x: -143,
                    y: 209,
                    rotation: 135, // left: 90, down: 360, right: 270, up: 180
                    longScale: 0.65,
                },
                {
                    x: 145,
                    y: -80,
                    rotation: 315,
                    longScale: 0.65,
                },
                {
                    x: -147,
                    y: -80,
                    rotation: 405, // left: 90, down: 360, right: 270, up: 180
                    longScale: 0.65,
                },
                {
                    x: 144,
                    y: 210,
                    rotation: 225,
                    longScale: 0.65,
                }
            ]
        },{ // 10
            startPoints:[
                {
                    startX: [640],
                    startY: [-460],
                    rotation: 45, // left: 0, down: 270, right:180, up:90
                    vx:-100,
                    vy:100
                },
                {
                    startX: [-680],
                    startY: [640],
                    rotation: 225,
                    vx:100,
                    vy:-100
                },
                {
                    startX: [687],
                    startY: [841],
                    rotation: 315, // left: 0, down: 270, right:180, up:90
                    vx:-100,
                    vy:-100
                },
                {
                    startX: [-723],
                    startY: [-752],
                    rotation: 135,
                    vx:100,
                    vy:100
                }
            ],
            cashLines:[
                {
                    x: -143,
                    y: 209,
                    rotation: 135, // left: 90, down: 360, right: 270, up: 180
                    longScale: 0.65,
                },
                {
                    x: 145,
                    y: -80,
                    rotation: 315,
                    longScale: 0.65,
                },
                {
                    x: -147,
                    y: -80,
                    rotation: 405, // left: 90, down: 360, right: 270, up: 180
                    longScale: 0.65,
                },
                {
                    x: 144,
                    y: 210,
                    rotation: 225,
                    longScale: 0.65,
                }
            ]
        },{ // 10
            startPoints:[
                {
                    startX: [640],
                    startY: [-460],
                    rotation: 45, // left: 0, down: 270, right:180, up:90
                    vx:-100,
                    vy:100
                },
                {
                    startX: [-680],
                    startY: [640],
                    rotation: 225,
                    vx:100,
                    vy:-100
                },
                {
                    startX: [687],
                    startY: [841],
                    rotation: 315, // left: 0, down: 270, right:180, up:90
                    vx:-100,
                    vy:-100
                },
                {
                    startX: [-723],
                    startY: [-752],
                    rotation: 135,
                    vx:100,
                    vy:100
                }
            ],
            cashLines:[
                {
                    x: -143,
                    y: 209,
                    rotation: 135, // left: 90, down: 360, right: 270, up: 180
                    longScale: 0.65,
                },
                {
                    x: 145,
                    y: -80,
                    rotation: 315,
                    longScale: 0.65,
                },
                {
                    x: -147,
                    y: -80,
                    rotation: 405, // left: 90, down: 360, right: 270, up: 180
                    longScale: 0.65,
                },
                {
                    x: 144,
                    y: 210,
                    rotation: 225,
                    longScale: 0.65,
                }
            ]
        },{ // 10
            startPoints:[
                {
                    startX: [640],
                    startY: [-460],
                    rotation: 45, // left: 0, down: 270, right:180, up:90
                    vx:-100,
                    vy:100
                },
                {
                    startX: [-680],
                    startY: [640],
                    rotation: 225,
                    vx:100,
                    vy:-100
                },
                {
                    startX: [687],
                    startY: [841],
                    rotation: 315, // left: 0, down: 270, right:180, up:90
                    vx:-100,
                    vy:-100
                },
                {
                    startX: [-723],
                    startY: [-752],
                    rotation: 135,
                    vx:100,
                    vy:100
                }
            ],
            cashLines:[
                {
                    x: -143,
                    y: 209,
                    rotation: 135, // left: 90, down: 360, right: 270, up: 180
                    longScale: 0.65,
                },
                {
                    x: 145,
                    y: -80,
                    rotation: 315,
                    longScale: 0.65,
                },
                {
                    x: -147,
                    y: -80,
                    rotation: 405, // left: 90, down: 360, right: 270, up: 180
                    longScale: 0.65,
                },
                {
                    x: 144,
                    y: 210,
                    rotation: 225,
                    longScale: 0.65,
                }
            ]
        },{ // 10
            startPoints:[
                {
                    startX: [640],
                    startY: [-460],
                    rotation: 45, // left: 0, down: 270, right:180, up:90
                    vx:-100,
                    vy:100
                },
                {
                    startX: [-680],
                    startY: [640],
                    rotation: 225,
                    vx:100,
                    vy:-100
                },
                {
                    startX: [687],
                    startY: [841],
                    rotation: 315, // left: 0, down: 270, right:180, up:90
                    vx:-100,
                    vy:-100
                },
                {
                    startX: [-723],
                    startY: [-752],
                    rotation: 135,
                    vx:100,
                    vy:100
                }
            ],
            cashLines:[
                {
                    x: -143,
                    y: 209,
                    rotation: 135, // left: 90, down: 360, right: 270, up: 180
                    longScale: 0.65,
                },
                {
                    x: 145,
                    y: -80,
                    rotation: 315,
                    longScale: 0.65,
                },
                {
                    x: -147,
                    y: -80,
                    rotation: 405, // left: 90, down: 360, right: 270, up: 180
                    longScale: 0.65,
                },
                {
                    x: 144,
                    y: 210,
                    rotation: 225,
                    longScale: 0.65,
                }
            ]
        },{ // 10
            startPoints:[
                {
                    startX: [640],
                    startY: [-460],
                    rotation: 45, // left: 0, down: 270, right:180, up:90
                    vx:-100,
                    vy:100
                },
                {
                    startX: [-680],
                    startY: [640],
                    rotation: 225,
                    vx:100,
                    vy:-100
                },
                {
                    startX: [687],
                    startY: [841],
                    rotation: 315, // left: 0, down: 270, right:180, up:90
                    vx:-100,
                    vy:-100
                },
                {
                    startX: [-723],
                    startY: [-752],
                    rotation: 135,
                    vx:100,
                    vy:100
                }
            ],
            cashLines:[
                {
                    x: -143,
                    y: 209,
                    rotation: 135, // left: 90, down: 360, right: 270, up: 180
                    longScale: 0.65,
                },
                {
                    x: 145,
                    y: -80,
                    rotation: 315,
                    longScale: 0.65,
                },
                {
                    x: -147,
                    y: -80,
                    rotation: 405, // left: 90, down: 360, right: 270, up: 180
                    longScale: 0.65,
                },
                {
                    x: 144,
                    y: 210,
                    rotation: 225,
                    longScale: 0.65,
                }
            ]
        },{ // 10
            startPoints:[
                {
                    startX: [640],
                    startY: [-460],
                    rotation: 45, // left: 0, down: 270, right:180, up:90
                    vx:-100,
                    vy:100
                },
                {
                    startX: [-680],
                    startY: [640],
                    rotation: 225,
                    vx:100,
                    vy:-100
                },
                {
                    startX: [687],
                    startY: [841],
                    rotation: 315, // left: 0, down: 270, right:180, up:90
                    vx:-100,
                    vy:-100
                },
                {
                    startX: [-723],
                    startY: [-752],
                    rotation: 135,
                    vx:100,
                    vy:100
                }
            ],
            cashLines:[
                {
                    x: -143,
                    y: 209,
                    rotation: 135, // left: 90, down: 360, right: 270, up: 180
                    longScale: 0.65,
                },
                {
                    x: 145,
                    y: -80,
                    rotation: 315,
                    longScale: 0.65,
                },
                {
                    x: -147,
                    y: -80,
                    rotation: 405, // left: 90, down: 360, right: 270, up: 180
                    longScale: 0.65,
                },
                {
                    x: 144,
                    y: 210,
                    rotation: 225,
                    longScale: 0.65,
                }
            ]
        },{ // 10
            startPoints:[
                {
                    startX: [640],
                    startY: [-460],
                    rotation: 45, // left: 0, down: 270, right:180, up:90
                    vx:-100,
                    vy:100
                },
                {
                    startX: [-680],
                    startY: [640],
                    rotation: 225,
                    vx:100,
                    vy:-100
                },
                {
                    startX: [687],
                    startY: [841],
                    rotation: 315, // left: 0, down: 270, right:180, up:90
                    vx:-100,
                    vy:-100
                },
                {
                    startX: [-723],
                    startY: [-752],
                    rotation: 135,
                    vx:100,
                    vy:100
                }
            ],
            cashLines:[
                {
                    x: -143,
                    y: 209,
                    rotation: 135, // left: 90, down: 360, right: 270, up: 180
                    longScale: 0.65,
                },
                {
                    x: 145,
                    y: -80,
                    rotation: 315,
                    longScale: 0.65,
                },
                {
                    x: -147,
                    y: -80,
                    rotation: 405, // left: 90, down: 360, right: 270, up: 180
                    longScale: 0.65,
                },
                {
                    x: 144,
                    y: 210,
                    rotation: 225,
                    longScale: 0.65,
                }
            ]
        },{ // 10
            startPoints:[
                {
                    startX: [640],
                    startY: [-460],
                    rotation: 45, // left: 0, down: 270, right:180, up:90
                    vx:-100,
                    vy:100
                },
                {
                    startX: [-680],
                    startY: [640],
                    rotation: 225,
                    vx:100,
                    vy:-100
                },
                {
                    startX: [687],
                    startY: [841],
                    rotation: 315, // left: 0, down: 270, right:180, up:90
                    vx:-100,
                    vy:-100
                },
                {
                    startX: [-723],
                    startY: [-752],
                    rotation: 135,
                    vx:100,
                    vy:100
                }
            ],
            cashLines:[
                {
                    x: -143,
                    y: 209,
                    rotation: 135, // left: 90, down: 360, right: 270, up: 180
                    longScale: 0.65,
                },
                {
                    x: 145,
                    y: -80,
                    rotation: 315,
                    longScale: 0.65,
                },
                {
                    x: -147,
                    y: -80,
                    rotation: 405, // left: 90, down: 360, right: 270, up: 180
                    longScale: 0.65,
                },
                {
                    x: 144,
                    y: 210,
                    rotation: 225,
                    longScale: 0.65,
                }
            ]
        },{ // 10
            startPoints:[
                {
                    startX: [640],
                    startY: [-460],
                    rotation: 45, // left: 0, down: 270, right:180, up:90
                    vx:-100,
                    vy:100
                },
                {
                    startX: [-680],
                    startY: [640],
                    rotation: 225,
                    vx:100,
                    vy:-100
                },
                {
                    startX: [687],
                    startY: [841],
                    rotation: 315, // left: 0, down: 270, right:180, up:90
                    vx:-100,
                    vy:-100
                },
                {
                    startX: [-723],
                    startY: [-752],
                    rotation: 135,
                    vx:100,
                    vy:100
                }
            ],
            cashLines:[
                {
                    x: -143,
                    y: 209,
                    rotation: 135, // left: 90, down: 360, right: 270, up: 180
                    longScale: 0.65,
                },
                {
                    x: 145,
                    y: -80,
                    rotation: 315,
                    longScale: 0.65,
                },
                {
                    x: -147,
                    y: -80,
                    rotation: 405, // left: 90, down: 360, right: 270, up: 180
                    longScale: 0.65,
                },
                {
                    x: 144,
                    y: 210,
                    rotation: 225,
                    longScale: 0.65,
                }
            ]
        },{ // 10
            startPoints:[
                {
                    startX: [640],
                    startY: [-460],
                    rotation: 45, // left: 0, down: 270, right:180, up:90
                    vx:-100,
                    vy:100
                },
                {
                    startX: [-680],
                    startY: [640],
                    rotation: 225,
                    vx:100,
                    vy:-100
                },
                {
                    startX: [687],
                    startY: [841],
                    rotation: 315, // left: 0, down: 270, right:180, up:90
                    vx:-100,
                    vy:-100
                },
                {
                    startX: [-723],
                    startY: [-752],
                    rotation: 135,
                    vx:100,
                    vy:100
                }
            ],
            cashLines:[
                {
                    x: -143,
                    y: 209,
                    rotation: 135, // left: 90, down: 360, right: 270, up: 180
                    longScale: 0.65,
                },
                {
                    x: 145,
                    y: -80,
                    rotation: 315,
                    longScale: 0.65,
                },
                {
                    x: -147,
                    y: -80,
                    rotation: 405, // left: 90, down: 360, right: 270, up: 180
                    longScale: 0.65,
                },
                {
                    x: 144,
                    y: 210,
                    rotation: 225,
                    longScale: 0.65,
                }
            ]
        },{ // 10
            startPoints:[
                {
                    startX: [640],
                    startY: [-460],
                    rotation: 45, // left: 0, down: 270, right:180, up:90
                    vx:-100,
                    vy:100
                },
                {
                    startX: [-680],
                    startY: [640],
                    rotation: 225,
                    vx:100,
                    vy:-100
                },
                {
                    startX: [687],
                    startY: [841],
                    rotation: 315, // left: 0, down: 270, right:180, up:90
                    vx:-100,
                    vy:-100
                },
                {
                    startX: [-723],
                    startY: [-752],
                    rotation: 135,
                    vx:100,
                    vy:100
                }
            ],
            cashLines:[
                {
                    x: -143,
                    y: 209,
                    rotation: 135, // left: 90, down: 360, right: 270, up: 180
                    longScale: 0.65,
                },
                {
                    x: 145,
                    y: -80,
                    rotation: 315,
                    longScale: 0.65,
                },
                {
                    x: -147,
                    y: -80,
                    rotation: 405, // left: 90, down: 360, right: 270, up: 180
                    longScale: 0.65,
                },
                {
                    x: 144,
                    y: 210,
                    rotation: 225,
                    longScale: 0.65,
                }
            ]
        },{ // 10
            startPoints:[
                {
                    startX: [640],
                    startY: [-460],
                    rotation: 45, // left: 0, down: 270, right:180, up:90
                    vx:-100,
                    vy:100
                },
                {
                    startX: [-680],
                    startY: [640],
                    rotation: 225,
                    vx:100,
                    vy:-100
                },
                {
                    startX: [687],
                    startY: [841],
                    rotation: 315, // left: 0, down: 270, right:180, up:90
                    vx:-100,
                    vy:-100
                },
                {
                    startX: [-723],
                    startY: [-752],
                    rotation: 135,
                    vx:100,
                    vy:100
                }
            ],
            cashLines:[
                {
                    x: -143,
                    y: 209,
                    rotation: 135, // left: 90, down: 360, right: 270, up: 180
                    longScale: 0.65,
                },
                {
                    x: 145,
                    y: -80,
                    rotation: 315,
                    longScale: 0.65,
                },
                {
                    x: -147,
                    y: -80,
                    rotation: 405, // left: 90, down: 360, right: 270, up: 180
                    longScale: 0.65,
                },
                {
                    x: 144,
                    y: 210,
                    rotation: 225,
                    longScale: 0.65,
                }
            ]
        },{ // 10
            startPoints:[
                {
                    startX: [640],
                    startY: [-460],
                    rotation: 45, // left: 0, down: 270, right:180, up:90
                    vx:-100,
                    vy:100
                },
                {
                    startX: [-680],
                    startY: [640],
                    rotation: 225,
                    vx:100,
                    vy:-100
                },
                {
                    startX: [687],
                    startY: [841],
                    rotation: 315, // left: 0, down: 270, right:180, up:90
                    vx:-100,
                    vy:-100
                },
                {
                    startX: [-723],
                    startY: [-752],
                    rotation: 135,
                    vx:100,
                    vy:100
                }
            ],
            cashLines:[
                {
                    x: -143,
                    y: 209,
                    rotation: 135, // left: 90, down: 360, right: 270, up: 180
                    longScale: 0.65,
                },
                {
                    x: 145,
                    y: -80,
                    rotation: 315,
                    longScale: 0.65,
                },
                {
                    x: -147,
                    y: -80,
                    rotation: 405, // left: 90, down: 360, right: 270, up: 180
                    longScale: 0.65,
                },
                {
                    x: 144,
                    y: 210,
                    rotation: 225,
                    longScale: 0.65,
                }
            ]
        },{ // 10
            startPoints:[
                {
                    startX: [640],
                    startY: [-460],
                    rotation: 45, // left: 0, down: 270, right:180, up:90
                    vx:-100,
                    vy:100
                },
                {
                    startX: [-680],
                    startY: [640],
                    rotation: 225,
                    vx:100,
                    vy:-100
                },
                {
                    startX: [687],
                    startY: [841],
                    rotation: 315, // left: 0, down: 270, right:180, up:90
                    vx:-100,
                    vy:-100
                },
                {
                    startX: [-723],
                    startY: [-752],
                    rotation: 135,
                    vx:100,
                    vy:100
                }
            ],
            cashLines:[
                {
                    x: -143,
                    y: 209,
                    rotation: 135, // left: 90, down: 360, right: 270, up: 180
                    longScale: 0.65,
                },
                {
                    x: 145,
                    y: -80,
                    rotation: 315,
                    longScale: 0.65,
                },
                {
                    x: -147,
                    y: -80,
                    rotation: 405, // left: 90, down: 360, right: 270, up: 180
                    longScale: 0.65,
                },
                {
                    x: 144,
                    y: 210,
                    rotation: 225,
                    longScale: 0.65,
                }
            ]
        },{ // 10
            startPoints:[
                {
                    startX: [640],
                    startY: [-460],
                    rotation: 45, // left: 0, down: 270, right:180, up:90
                    vx:-100,
                    vy:100
                },
                {
                    startX: [-680],
                    startY: [640],
                    rotation: 225,
                    vx:100,
                    vy:-100
                },
                {
                    startX: [687],
                    startY: [841],
                    rotation: 315, // left: 0, down: 270, right:180, up:90
                    vx:-100,
                    vy:-100
                },
                {
                    startX: [-723],
                    startY: [-752],
                    rotation: 135,
                    vx:100,
                    vy:100
                }
            ],
            cashLines:[
                {
                    x: -143,
                    y: 209,
                    rotation: 135, // left: 90, down: 360, right: 270, up: 180
                    longScale: 0.65,
                },
                {
                    x: 145,
                    y: -80,
                    rotation: 315,
                    longScale: 0.65,
                },
                {
                    x: -147,
                    y: -80,
                    rotation: 405, // left: 90, down: 360, right: 270, up: 180
                    longScale: 0.65,
                },
                {
                    x: 144,
                    y: 210,
                    rotation: 225,
                    longScale: 0.65,
                }
            ]
        },{ // 10
            startPoints:[
                {
                    startX: [640],
                    startY: [-460],
                    rotation: 45, // left: 0, down: 270, right:180, up:90
                    vx:-100,
                    vy:100
                },
                {
                    startX: [-680],
                    startY: [640],
                    rotation: 225,
                    vx:100,
                    vy:-100
                },
                {
                    startX: [687],
                    startY: [841],
                    rotation: 315, // left: 0, down: 270, right:180, up:90
                    vx:-100,
                    vy:-100
                },
                {
                    startX: [-723],
                    startY: [-752],
                    rotation: 135,
                    vx:100,
                    vy:100
                }
            ],
            cashLines:[
                {
                    x: -143,
                    y: 209,
                    rotation: 135, // left: 90, down: 360, right: 270, up: 180
                    longScale: 0.65,
                },
                {
                    x: 145,
                    y: -80,
                    rotation: 315,
                    longScale: 0.65,
                },
                {
                    x: -147,
                    y: -80,
                    rotation: 405, // left: 90, down: 360, right: 270, up: 180
                    longScale: 0.65,
                },
                {
                    x: 144,
                    y: 210,
                    rotation: 225,
                    longScale: 0.65,
                }
            ]
        },{ // 10
            startPoints:[
                {
                    startX: [640],
                    startY: [-460],
                    rotation: 45, // left: 0, down: 270, right:180, up:90
                    vx:-100,
                    vy:100
                },
                {
                    startX: [-680],
                    startY: [640],
                    rotation: 225,
                    vx:100,
                    vy:-100
                },
                {
                    startX: [687],
                    startY: [841],
                    rotation: 315, // left: 0, down: 270, right:180, up:90
                    vx:-100,
                    vy:-100
                },
                {
                    startX: [-723],
                    startY: [-752],
                    rotation: 135,
                    vx:100,
                    vy:100
                }
            ],
            cashLines:[
                {
                    x: -143,
                    y: 209,
                    rotation: 135, // left: 90, down: 360, right: 270, up: 180
                    longScale: 0.65,
                },
                {
                    x: 145,
                    y: -80,
                    rotation: 315,
                    longScale: 0.65,
                },
                {
                    x: -147,
                    y: -80,
                    rotation: 405, // left: 90, down: 360, right: 270, up: 180
                    longScale: 0.65,
                },
                {
                    x: 144,
                    y: 210,
                    rotation: 225,
                    longScale: 0.65,
                }
            ]
        },{ // 10
            startPoints:[
                {
                    startX: [640],
                    startY: [-460],
                    rotation: 45, // left: 0, down: 270, right:180, up:90
                    vx:-100,
                    vy:100
                },
                {
                    startX: [-680],
                    startY: [640],
                    rotation: 225,
                    vx:100,
                    vy:-100
                },
                {
                    startX: [687],
                    startY: [841],
                    rotation: 315, // left: 0, down: 270, right:180, up:90
                    vx:-100,
                    vy:-100
                },
                {
                    startX: [-723],
                    startY: [-752],
                    rotation: 135,
                    vx:100,
                    vy:100
                }
            ],
            cashLines:[
                {
                    x: -143,
                    y: 209,
                    rotation: 135, // left: 90, down: 360, right: 270, up: 180
                    longScale: 0.65,
                },
                {
                    x: 145,
                    y: -80,
                    rotation: 315,
                    longScale: 0.65,
                },
                {
                    x: -147,
                    y: -80,
                    rotation: 405, // left: 90, down: 360, right: 270, up: 180
                    longScale: 0.65,
                },
                {
                    x: 144,
                    y: 210,
                    rotation: 225,
                    longScale: 0.65,
                }
            ]
        },{ // 10
            startPoints:[
                {
                    startX: [640],
                    startY: [-460],
                    rotation: 45, // left: 0, down: 270, right:180, up:90
                    vx:-100,
                    vy:100
                },
                {
                    startX: [-680],
                    startY: [640],
                    rotation: 225,
                    vx:100,
                    vy:-100
                },
                {
                    startX: [687],
                    startY: [841],
                    rotation: 315, // left: 0, down: 270, right:180, up:90
                    vx:-100,
                    vy:-100
                },
                {
                    startX: [-723],
                    startY: [-752],
                    rotation: 135,
                    vx:100,
                    vy:100
                }
            ],
            cashLines:[
                {
                    x: -143,
                    y: 209,
                    rotation: 135, // left: 90, down: 360, right: 270, up: 180
                    longScale: 0.65,
                },
                {
                    x: 145,
                    y: -80,
                    rotation: 315,
                    longScale: 0.65,
                },
                {
                    x: -147,
                    y: -80,
                    rotation: 405, // left: 90, down: 360, right: 270, up: 180
                    longScale: 0.65,
                },
                {
                    x: 144,
                    y: 210,
                    rotation: 225,
                    longScale: 0.65,
                }
            ]
        },{ // 10
            startPoints:[
                {
                    startX: [640],
                    startY: [-460],
                    rotation: 45, // left: 0, down: 270, right:180, up:90
                    vx:-100,
                    vy:100
                },
                {
                    startX: [-680],
                    startY: [640],
                    rotation: 225,
                    vx:100,
                    vy:-100
                },
                {
                    startX: [687],
                    startY: [841],
                    rotation: 315, // left: 0, down: 270, right:180, up:90
                    vx:-100,
                    vy:-100
                },
                {
                    startX: [-723],
                    startY: [-752],
                    rotation: 135,
                    vx:100,
                    vy:100
                }
            ],
            cashLines:[
                {
                    x: -143,
                    y: 209,
                    rotation: 135, // left: 90, down: 360, right: 270, up: 180
                    longScale: 0.65,
                },
                {
                    x: 145,
                    y: -80,
                    rotation: 315,
                    longScale: 0.65,
                },
                {
                    x: -147,
                    y: -80,
                    rotation: 405, // left: 90, down: 360, right: 270, up: 180
                    longScale: 0.65,
                },
                {
                    x: 144,
                    y: 210,
                    rotation: 225,
                    longScale: 0.65,
                }
            ]
        },{ // 10
            startPoints:[
                {
                    startX: [640],
                    startY: [-460],
                    rotation: 45, // left: 0, down: 270, right:180, up:90
                    vx:-100,
                    vy:100
                },
                {
                    startX: [-680],
                    startY: [640],
                    rotation: 225,
                    vx:100,
                    vy:-100
                },
                {
                    startX: [687],
                    startY: [841],
                    rotation: 315, // left: 0, down: 270, right:180, up:90
                    vx:-100,
                    vy:-100
                },
                {
                    startX: [-723],
                    startY: [-752],
                    rotation: 135,
                    vx:100,
                    vy:100
                }
            ],
            cashLines:[
                {
                    x: -143,
                    y: 209,
                    rotation: 135, // left: 90, down: 360, right: 270, up: 180
                    longScale: 0.65,
                },
                {
                    x: 145,
                    y: -80,
                    rotation: 315,
                    longScale: 0.65,
                },
                {
                    x: -147,
                    y: -80,
                    rotation: 405, // left: 90, down: 360, right: 270, up: 180
                    longScale: 0.65,
                },
                {
                    x: 144,
                    y: 210,
                    rotation: 225,
                    longScale: 0.65,
                }
            ]
        },{ // 10
            startPoints:[
                {
                    startX: [640],
                    startY: [-460],
                    rotation: 45, // left: 0, down: 270, right:180, up:90
                    vx:-100,
                    vy:100
                },
                {
                    startX: [-680],
                    startY: [640],
                    rotation: 225,
                    vx:100,
                    vy:-100
                },
                {
                    startX: [687],
                    startY: [841],
                    rotation: 315, // left: 0, down: 270, right:180, up:90
                    vx:-100,
                    vy:-100
                },
                {
                    startX: [-723],
                    startY: [-752],
                    rotation: 135,
                    vx:100,
                    vy:100
                }
            ],
            cashLines:[
                {
                    x: -143,
                    y: 209,
                    rotation: 135, // left: 90, down: 360, right: 270, up: 180
                    longScale: 0.65,
                },
                {
                    x: 145,
                    y: -80,
                    rotation: 315,
                    longScale: 0.65,
                },
                {
                    x: -147,
                    y: -80,
                    rotation: 405, // left: 90, down: 360, right: 270, up: 180
                    longScale: 0.65,
                },
                {
                    x: 144,
                    y: 210,
                    rotation: 225,
                    longScale: 0.65,
                }
            ]
        },{ // 10
            startPoints:[
                {
                    startX: [640],
                    startY: [-460],
                    rotation: 45, // left: 0, down: 270, right:180, up:90
                    vx:-100,
                    vy:100
                },
                {
                    startX: [-680],
                    startY: [640],
                    rotation: 225,
                    vx:100,
                    vy:-100
                },
                {
                    startX: [687],
                    startY: [841],
                    rotation: 315, // left: 0, down: 270, right:180, up:90
                    vx:-100,
                    vy:-100
                },
                {
                    startX: [-723],
                    startY: [-752],
                    rotation: 135,
                    vx:100,
                    vy:100
                }
            ],
            cashLines:[
                {
                    x: -143,
                    y: 209,
                    rotation: 135, // left: 90, down: 360, right: 270, up: 180
                    longScale: 0.65,
                },
                {
                    x: 145,
                    y: -80,
                    rotation: 315,
                    longScale: 0.65,
                },
                {
                    x: -147,
                    y: -80,
                    rotation: 405, // left: 90, down: 360, right: 270, up: 180
                    longScale: 0.65,
                },
                {
                    x: 144,
                    y: 210,
                    rotation: 225,
                    longScale: 0.65,
                }
            ]
        },{ // 10
            startPoints:[
                {
                    startX: [640],
                    startY: [-460],
                    rotation: 45, // left: 0, down: 270, right:180, up:90
                    vx:-100,
                    vy:100
                },
                {
                    startX: [-680],
                    startY: [640],
                    rotation: 225,
                    vx:100,
                    vy:-100
                },
                {
                    startX: [687],
                    startY: [841],
                    rotation: 315, // left: 0, down: 270, right:180, up:90
                    vx:-100,
                    vy:-100
                },
                {
                    startX: [-723],
                    startY: [-752],
                    rotation: 135,
                    vx:100,
                    vy:100
                }
            ],
            cashLines:[
                {
                    x: -143,
                    y: 209,
                    rotation: 135, // left: 90, down: 360, right: 270, up: 180
                    longScale: 0.65,
                },
                {
                    x: 145,
                    y: -80,
                    rotation: 315,
                    longScale: 0.65,
                },
                {
                    x: -147,
                    y: -80,
                    rotation: 405, // left: 90, down: 360, right: 270, up: 180
                    longScale: 0.65,
                },
                {
                    x: 144,
                    y: 210,
                    rotation: 225,
                    longScale: 0.65,
                }
            ]
        },{ // 10
            startPoints:[
                {
                    startX: [640],
                    startY: [-460],
                    rotation: 45, // left: 0, down: 270, right:180, up:90
                    vx:-100,
                    vy:100
                },
                {
                    startX: [-680],
                    startY: [640],
                    rotation: 225,
                    vx:100,
                    vy:-100
                },
                {
                    startX: [687],
                    startY: [841],
                    rotation: 315, // left: 0, down: 270, right:180, up:90
                    vx:-100,
                    vy:-100
                },
                {
                    startX: [-723],
                    startY: [-752],
                    rotation: 135,
                    vx:100,
                    vy:100
                }
            ],
            cashLines:[
                {
                    x: -143,
                    y: 209,
                    rotation: 135, // left: 90, down: 360, right: 270, up: 180
                    longScale: 0.65,
                },
                {
                    x: 145,
                    y: -80,
                    rotation: 315,
                    longScale: 0.65,
                },
                {
                    x: -147,
                    y: -80,
                    rotation: 405, // left: 90, down: 360, right: 270, up: 180
                    longScale: 0.65,
                },
                {
                    x: 144,
                    y: 210,
                    rotation: 225,
                    longScale: 0.65,
                }
            ]
        },
    ],

    getBoardData(index){
        return this.data[index];
    },
}


module.exports = BoardsManager;