const BoardsManager = {
    // startPoints.rota: left: 0, up: 90, right: 180, down: 270,  
    // cashLines.rota: left: 90, up: 180, right: 270, down: 360,
    data: [
        { // 0
            startPoints: [
                { x: [800], y: [-100, -250, -400], rota: 0, vx: -120, vy: 0 },
                { x: [-300, -150, 0], y: [1100], rota: 270, vx: 0, vy: -150 },
            ],
            cashLines: [
                { x: -400, y: -240, rota: 90, scaleX: 0.95, },
                { x: -150, y: -500, rota: 360, scaleX: 0.95, },
            ]
        },
        { // 1
            startPoints: [
                { x: [700], y: [170, 30, -110, -250], rota: 0, vx: -200, vy: 0 },
                { x: [-270, -120], y: [-1100], rota: 90, vx: 0, vy: 200 },
            ],
            cashLines: [
                { x: -390, y: -47, rota: 90, scaleX: 1.3, },
                { x: -198, y: 284, rota: 180, scaleX: 0.65, },
            ]
        },
        { // 2
            startPoints: [
                { x: [650], y: [170], rota: 0, vx: -200, vy: 0 },
                { x: [70], y: [-1100], rota: 90, vx: 0, vy: 200 },
                { x: [-650], y: [20], rota: 180, vx: 200, vy: 0 },
                { x: [-60], y: [1100], rota: 270, vx: 0, vy: -200 },
            ],
            cashLines: [
                { x: -200, y: 96, rota: 90, scaleX: 0.63, },
                { x: 0, y: 280, rota: 180, scaleX: 0.63, },
                { x: 200, y: 96, rota: 270, scaleX: 0.63, },
                { x: 0, y: -100, rota: 360, scaleX: 0.63, },
            ]
        },
        { // 3
            startPoints: [
                { x: [630], y: [170, 30, -110, -250], rota: 0, vx: -200, vy: 0 },
                { x: [-130], y: [-1100], rota: 90, vx: 0, vy: 200 },
                { x: [-270], y: [1100], rota: 270, vx: 0, vy: -200 },
            ],
            cashLines: [
                { x: -390, y: -46, rota: 90, scaleX: 1.28, },
                { x: -197, y: 290, rota: 180, scaleX: 0.63, },
                { x: -197, y: -386, rota: 360, scaleX: 0.63, },
            ]
        },
        { // 4
            startPoints: [
                { x: [660], y: [-490], rota: 45, vx: -100, vy: 100 },
                { x: [-620], y: [-660], rota: 135, vx: 100, vy: 100 },
                { x: [-630], y: [590], rota: 225, vx: 100, vy: -100 },
                { x: [640], y: [800], rota: 315, vx: -100, vy: -100 },
            ],
            cashLines: [
                { x: -141, y: 206, rota: 135, scaleX: 0.65, },
                { x: 144, y: 208, rota: 225, scaleX: 0.65, },
                { x: 141, y: -78, rota: 315, scaleX: 0.63, },
                { x: -149, y: -81, rota: 405, scaleX: 0.65, },
            ]
        },
        { // 5
            startPoints: [
                { x: [270], y: [-1100], rota: 90, vx: 0, vy: 200 },
                { x: [-640], y: [160, 10, -115, -230], rota: 180, vx: 200, vy: 0 },
                { x: [120], y: [1100], rota: 270, vx: 0, vy: -200 },
            ],
            cashLines: [
                { x: 197, y: 293, rota: 180, scaleX: 0.65, },
                { x: 390, y: -44, rota: 270, scaleX: 1.28, },
                { x: 197, y: -389, rota: 360, scaleX: 0.65, },
            ]
        },
        { // 6
            startPoints: [
                { x: [625], y: [-100, -240, -275], rota: 0, vx: -200, vy: 0 },
                { x: [-285, -140, -2], y: [1100], rota: 270, vx: 0, vy: -200 },
            ],
            cashLines: [
                { x: -410, y: -240, rota: 90, scaleX: 0.95, },
                { x: -149, y: -510, rota: 360, scaleX: 0.95, },
            ]
        },
        { // 7
            startPoints: [
                { x: [1100], y: [160], rota: 0, vx: -200, vy: 0 },
                { x: [75], y: [-1100], rota: 90, vx: 0, vy: 200 },
                { x: [-1100], y: [20], rota: 180, vx: 200, vy: 0 },
                { x: [-75], y: [1100], rota: 270, vx: 0, vy: -200 },
            ],
            cashLines: [
                { x: -203, y: 95, rota: 90, scaleX: 0.65, },
                { x: 2, y: 300, rota: 180, scaleX: 0.65, },
                { x: 203, y: 95, rota: 270, scaleX: 0.65, },
                { x: 2, y: -110, rota: 360, scaleX: 0.65, },
            ]
        },
        { // 8
            startPoints: [
                { x: [640], y: [-460], rota: 45, vx: -100, vy: 100 },
                { x: [-723], y: [-752], rota: 135, vx: 100, vy: 100 },
                { x: [-680], y: [640], rota: 225, vx: 100, vy: -100 },
                { x: [687], y: [841], rota: 315, vx: -100, vy: -100 },
            ],
            cashLines: [
                { x: -143, y: 209, rota: 135, scaleX: 0.65, },
                { x: 144, y: 210, rota: 225, scaleX: 0.65, },
                { x: 145, y: -80, rota: 315, scaleX: 0.65, },
                { x: -147, y: -80, rota: 405, scaleX: 0.65, },
            ]
        },
        { // 9
            startPoints: [
                { x: [136, 295], y: [-1100], rota: 90, vx: 0, vy: 200 },
                { x: [-700], y: [180, 23. - 126, -280], rota: 180, vx: 200, vy: 0 },
            ],
            cashLines: [
                { x: 430, y: -50, rota: 270, scaleX: 1.45, },
                { x: 220, y: 320, rota: 180, scaleX: 0.7, },
            ]
        },
        { // 10
            startPoints: [
                { x: [-180, 0, 180], y: [-1100], rota: 90, vx: 0, vy: 200 },
            ],
            cashLines: [
                { x: 0, y: 800, rota: 180, scaleX: 1.15, },
            ]
        },
        { // 11
            startPoints: [
                { x: [-170, 0, 170], y: [-1100], rota: 90, vx: 0, vy: 200 },
            ],
            cashLines: [
                { x: 0, y: 740, rota: 180, scaleX: 1.15, },
            ]
        },
        { // 12
            startPoints: [
                { x: [591], y: [-101, -267, -423], rota: 0, vx: -220, vy: 0 },
                { x: [-370, -180, -3], y: [1160], rota: 270, vx: 0, vy: -200 },
            ],
            cashLines: [
                { x: -488, y: -274, rota: 90, scaleX: 1.1, },
                { x: -183, y: -587, rota: 360, scaleX: 1.15, },
            ]
        },
        { // 13
            startPoints: [
                { x: [-609], y: [182, 46, -138, -311], rota: 180, vx: 220, vy: 0 },
            ],
            cashLines: [
                { x: 90, y: -50, rota: 270, scaleX: 1.45, },
            ]
        },
        { // 14
            startPoints: [
                { x: [90], y: [-1100], rota: 90, vx: 0, vy: 200 },
                { x: [700], y: [180], rota: 0, vx: -200, vy: 0 },
                { x: [-700], y: [16], rota: 180, vx: 220, vy: 0 },
                { x: [-76], y: [1100], rota: 270, vx: 0, vy: -220 },
            ],
            cashLines: [
                { x: 240, y: 110, rota: 270, scaleX: 0.7, },
                { x: -240, y: 110, rota: 90, scaleX: 0.7, },
                { x: 0, y: 350, rota: 180, scaleX: 0.75, },
                { x: 0, y: -130, rota: 360, scaleX: 0.75, },
            ]
        },
        { // 15
            startPoints: [
                { x: [-165, 0, 165], y: [-1150], rota: 90, vx: 0, vy: 220 },
            ],
            cashLines: [
                { x: 0, y: 800, rota: 180, scaleX: 1.15, },
            ]
        },
        { // 16
            startPoints: [
                { x: [632], y: [668], rota: 315, vx: -100, vy: -100 },
                { x: [-648], y: [683], rota: 225, vx: 100, vy: -100 },
            ],
            cashLines: [
                { x: -141, y: -78, rota: 90 + 315, scaleX: 0.38, },
                { x: 134, y: -60, rota: 90 + 225, scaleX: 0.38, },
            ]
        },
        { // 17
            startPoints: [
                { x: [721], y: [180], rota: 0, vx: -200, vy: 0 },
                { x: [-721], y: [20], rota: 180, vx: 200, vy: 0 },
                { x: [-88, 89], y: [-1100], rota: 90, vx: 0, vy: 200 },
            ],
            cashLines: [
                { x: -256, y: 107, rota: 90, scaleX: 0.70, },
                { x: 245, y: 107, rota: 270, scaleX: 0.70, },
                { x: 0, y: 816, rota: 180, scaleX: 0.75, },
            ]
        },
        { // 18
            startPoints: [
                { x: [607], y: [-103, -261, -424], rota: 0, vx: -200, vy: 0 },
                { x: [-352, -176, -14], y: [1100], rota: 270, vx: 0, vy: -200 },
            ],
            cashLines: [
                { x: -180, y: -620, rota: 360, scaleX: 1.15, },
                { x: -485, y: -275, rota: 90, scaleX: 1.08, },
            ]
        },
        { // 19
            startPoints: [
                { x: [90, -90], y: [-1150], rota: 90, vx: 0, vy: 200 },
                { x: [-600], y: [390], rota: 180, vx: 200, vy: 0 },
                { x: [730], y: [-380], rota: 0, vx: -200, vy: 0 },

            ],
            cashLines: [
                { x: 250, y: 404, rota: 270, scaleX: 0.35, },
                { x: -260, y: -370, rota: 90, scaleX: 0.35, },
                { x: 0, y: 768, rota: 180, scaleX: 0.78, },
            ]
        },
        { // 20
            startPoints: [
                { x: [720], y: [185], rota: 0, vx: -200, vy: 0 },
                { x: [-720], y: [23], rota: 180, vx: 200, vy: 0 },
                { x: [90, -90], y: [-1100], rota: 90, vx: 0, vy: 200 },

            ],
            cashLines: [
                { x: -240, y: 107, rota: 90, scaleX: 0.72, },
                { x: 240, y: 107, rota: 270, scaleX: 0.72, },
                { x: 0, y: 800, rota: 180, scaleX: 0.78, },
            ]
        },
        { // 21
            startPoints: [
                { x: [680], y: [380], rota: 0, vx: -200, vy: 0 },
                { x: [-640], y: [95], rota: 180, vx: 200, vy: 0 },
                { x: [-120, 120], y: [-1100], rota: 90, vx: 0, vy: 200 },

            ],
            cashLines: [
                { x: -382, y: 385, rota: 90, scaleX: 0.36, },
                { x: 330, y: 95, rota: 270, scaleX: 0.36, },
                { x: 125, y: 800, rota: 180, scaleX: 0.38, },
                { x: -125, y: 800, rota: 180, scaleX: 0.38, },
            ]
        },
        { // 22
            startPoints: [
                { x: [720], y: [188, 26, -130, -289], rota: 0, vx: -200, vy: 0 },
                { x: [-330, -156], y: [-1100], rota: 90, vx: 0, vy: 200 },
            ],
            cashLines: [
                { x: -470, y: -52, rota: 90, scaleX: 1.46, },
                { x: -240, y: 850, rota: 180, scaleX: 0.77, },
            ]
        },
        { // 23
            startPoints: [
                { x: [-243, -90, 90, 250], y: [-1100], rota: 90, vx: 0, vy: 200 },
            ],
            cashLines: [
                { x: 0, y: 550, rota: 180, scaleX: 1.55, },
            ]
        },
        { // 24
            startPoints: [
                { x: [614], y: [787], rota: 315, vx: -100, vy: -100 },
                { x: [-659], y: [-681], rota: 135, vx: 100, vy: 100 },
                { x: [680], y: [-450], rota: 45, vx: -100, vy: 100 },
                { x: [-752], y: [669], rota: 225, vx: 100, vy: -100 },
            ],
            cashLines: [
                { x: 201, y: -112, rota: 315, scaleX: 0.75, },
                { x: 206, y: 271, rota: 225, scaleX: 0.75, },
                { x: -184, y: -95, rota: 405, scaleX: 0.75, },
                { x: -186, y: 250, rota: 135, scaleX: 0.75, },
            ]
        },
        { // 25
            startPoints: [
                { x: [86, -79], y: [-1100], rota: 90, vx: 0, vy: 200 },
                { x: [689], y: [-61], rota: 21, vx: -200, vy: 75 },
                { x: [-650], y: [194], rota: 201, vx: 200, vy: -75 },
            ],
            cashLines: [
                { x: 0, y: 800, rota: 180, scaleX: 0.78, },
            ]
        },
        { // 26
            startPoints: [
                { x: [-327, -163], y: [1100], rota: 270, vx: 0, vy: -200 },
                { x: [600], y: [185, 20, -130, -290], rota: 0, vx: -200, vy: 0 },
            ],
            cashLines: [
                { x: -460, y: -53, rota: 90, scaleX: 1.47, },
                { x: -240, y: -430, rota: 360, scaleX: 0.77, },
            ]
        },
        { // 27
            startPoints: [
                { x: [-591], y: [-454], rota: 135, vx: 130, vy: 130 },
                { x: [612], y: [95], rota: 0, vx: -250, vy: 0 },
                { x: [582], y: [-466], rota: 45, vx: -140, vy: 140 },
                { x: [0], y: [1100], rota: 270, vx: 0, vy: -250 },
            ],
            cashLines: [
                { x: 242, y: 325, rota: 225, scaleX: 0.38, },
                { x: -320, y: 95, rota: 90, scaleX: 0.36, },
                { x: -255, y: 339, rota: 135, scaleX: 0.36, },
                { x: 0, y: -228, rota: 360, scaleX: 0.38, },
            ]
        },
        { // 28
            startPoints: [
                { x: [265, 84], y: [1100], rota: 270, vx: 0, vy: -200 },
                { x: [-646], y: [-198, -348, -532, -688], rota: 180, vx: 200, vy: 0 },
            ],
            cashLines: [
                { x: 175, y: -835, rota: 360, scaleX: 0.78, },
                { x: 412, y: -428, rota: 270, scaleX: 1.45, },
            ]
        },
        { // 29
            startPoints: [
                { x: [671], y: [505, 251, 5], rota: 0, vx: -200, vy: 0 },
                { x: [-78, 91], y: [-1100], rota: 90, vx: 0, vy: 200 },
            ],
            cashLines: [
                { x: 0, y: 790, rota: 180, scaleX: 0.78, },
            ]
        },
        { // 30
            startPoints: [
                { x: [740], y: [-505], rota: 0, vx: -200, vy: 0 },
                { x: [-781], y: [-327], rota: 180, vx: 200, vy: 0 },
                { x: [-86, 91], y: [1100], rota: 270, vx: 0, vy: -200 },
            ],
            cashLines: [
                { x: 0, y: -800, rota: 360, scaleX: 0.78, },
            ]
        },
        { // 31
            startPoints: [
                { x: [-667], y: [210, 55, -128, -305], rota: 180, vx: 200, vy: 0 },
            ],
            cashLines: [
                { x: 400, y: -51, rota: 270, scaleX: 1.45, },
            ]
        },
        { // 32
            startPoints: [
                { x: [-618], y: [502, 258, 1, -247], rota: 180, vx: 200, vy: 0 },
                { x: [-95, 100], y: [-1200], rota: 90, vx: 0, vy: 200 },
            ],
            cashLines: [
                { x: 0, y: 720, rota: 180, scaleX: 0.8, },
            ]
        },
        { // 33
            startPoints: [
                { x: [-700], y: [313], rota: 180, vx: 200, vy: 0 },
                { x: [715], y: [-100], rota: 0, vx: -200, vy: 0 },
                { x: [-600], y: [-880], rota: 122, vx: 90, vy: 145 },
            ],
            cashLines: [
                { x: 425, y: 310, rota: 270, scaleX: 0.36, },
                { x: -403, y: -96, rota: 90, scaleX: 0.36, },
                { x: 398, y: 735, rota: 212, scaleX: 0.36, },
            ]
        },
        { // 34
            startPoints: [
                { x: [-514, -692, -880], y: [-1100], rota: 212 - 90, vx: 90, vy: 145 },
            ],
            cashLines: [
                { x: -80, y: -115, rota: 212, scaleX: 1.15, },
            ]
        },
        { // 35
            startPoints: [
                { x: [-90, 90], y: [-1100], rota: 90, vx: 0, vy: 200 },
                { x: [743], y: [410], rota: 0, vx: -200, vy: 0 },
                { x: [-728], y: [-384], rota: 180, vx: 200, vy: 0 },
            ],
            cashLines: [
                { x: 0, y: 800, rota: 180, scaleX: 0.8, },
                { x: 383, y: -371, rota: 270, scaleX: 0.37, },
                { x: -327, y: 404, rota: 90, scaleX: 0.37, },
            ]
        },
        { // 36
            startPoints: [
                { x: [400, 610], y: [-1100], rota: 163 - 90, vx: -40, vy: 150 },
                { x: [-420, -600], y: [-1100], rota: 196 - 90, vx: 40, vy: 150 },
            ],
            cashLines: [
                // { x: 178, y: 40, rota: 163, scaleX: 0.78, },
                { x: 0, y: 660, rota: 163, scaleX: 0.78, },
                // { x: -178, y: 30, rota: 196, scaleX: 0.78, },
                { x: 0, y: 660, rota: 196, scaleX: 0.78, },
            ]
        },
        { // 37 
            startPoints: [
                { x: [634], y: [-62], rota: 21, vx: -150, vy: 60 },
                { x: [-612], y: [-62], rota: 159, vx: 150, vy: 60 },
                { x: [100, -100], y: [-1100], rota: 90, vx: 0, vy: 200 },
            ],
            cashLines: [
                { x: 0, y: 700, rota: 180, scaleX: 0.78, },
            ]
        },
        { // 38
            startPoints: [
                { x: [175, 0, -175], y: [-1100], rota: 90, vx: 0, vy: 200 },
            ],
            cashLines: [
                { x: 0, y: 700, rota: 180, scaleX: 1.15, },
            ]
        },
        { // 39
            startPoints: [
                { x: [580, 407], y: [-1100], rota: 164 - 90, vx: -47, vy: 170 },
            ],
            cashLines: [
                { x: -8, y: 698, rota: 164, scaleX: 0.78, },
            ]
        },
        { // 40
            startPoints: [
                { x: [0], y: [-1100], rota: 90, vx: 0, vy: 200 },
                { x: [650], y: [-574], rota: 45, vx: -100, vy: 100 },
                { x: [-650], y: [-574], rota: 135, vx: 100, vy: 100 },
            ],
            cashLines: [
                { x: 336, y: 377, rota: 225, scaleX: 0.4, },
                { x: 0, y: 550, rota: 180, scaleX: 0.4, },
                { x: -336, y: 377, rota: 135, scaleX: 0.4, },
            ]
        },
        { // 41
            startPoints: [
                { x: [-628], y: [-185, -338, -509, -677], rota: 180, vx: 200, vy: 0, },
                { x: [84, 263], y: [1100], rota: 270, vx: 0, vy: -200, },
            ],
            cashLines: [
                { x: 170, y: -830, rota: 360, scaleX: 0.78, },
                { x: 450, y: -428, rota: 270, scaleX: 1.46, },
            ]
        },
    ],

    getBoardData(index) {
        return this.data[index];
    },
}

module.exports = BoardsManager;