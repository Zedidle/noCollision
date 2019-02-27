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
                { x: [70,170], y: [-1100], rota: 90, vx: 0, vy: 300 },
                { x: [-700], y: [180, 23. - 126, -280], rota: 180, vx: 200, vy: 0 },
            ],
            cashLines: [
                { x: -143, y: 209, rota: 270, scaleX: 1.45, },
                { x: 145, y: -80, rota: 180, scaleX: 0.38, },
            ]
        },
    ],

    getBoardData(index) {
        return this.data[index];
    },
}


module.exports = BoardsManager;