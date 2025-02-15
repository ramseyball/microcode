namespace microcode.robots {
    export const enum RobotLineState {
        None = 0,
        Left = 0x01,
        Right = 0x02,
        Both = Left | Right,
    }

    /**
     * Compact commands through radio numbers
     */
    export const enum RobotCompactCommand {
        MotorState = 0xfffff00,
        MotorRunForward = MotorState | 0x1,
        MotorRunBackward = MotorState | 0x2,
        MotorTurnLeft = MotorState | 0x3,
        MotorTurnRight = MotorState | 0x4,
        MotorStop = MotorState | 0x5,

        /**
         * sonar detected obstable
         */
        ObstacleState = 0xfffff10,
        Obstacle1 = ObstacleState | 0x1,
        Obstacle2 = ObstacleState | 0x2,
        Obstacle3 = ObstacleState | 0x3,
        Obstacle4 = ObstacleState | 0x4,
        Obstacle5 = ObstacleState | 0x5,

        /**
         * Line sensor state change
         */
        LineState = 0xfffff20,
        Left = LineState | RobotLineState.Left,
        Right = LineState | RobotLineState.Right,
        Both = LineState | RobotLineState.Both,
    }
}
