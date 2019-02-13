const BoardPointsManager = {
    // 根据下标给每个场景配车的出发点
    boardsStartPoints:[
        [ // 0
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
        [ // 1
            {
                startX: [-270,-120],
                startY: [1100],
                rotation: 270,
                vx:0,   
                vy:-200
            },
            {
                startX: [700],
                startY: [170,30,-110,-250],
                rotation: 0,
                vx:-200,   
                vy:0
            },
        ],
        [ // 2
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
        [ // 3
            {
                startX: [-270,-130],
                startY: [1100],
                rotation: 270,
                vx:0,
                vy:-200
            },
            {
                startX: [630],
                startY: [170,30,-110,-250],
                rotation: 0,
                vx:-200,
                vy:0
            },
        ],
        [ // 4
            {
                startX: [640],
                startY: [800],
                rotation: -45,
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
            },
        ],
    ],


    getBoardPoints(index){
        return this.boardsStartPoints[index];
    },


}


module.exports = BoardPointsManager;