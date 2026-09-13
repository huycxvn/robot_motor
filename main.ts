radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        motobit.enable(MotorPower.On)
        motobit.setMotorSpeed(Motor.Left, MotorDirection.Forward, speed)
        motobit.setMotorSpeed(Motor.Right, MotorDirection.Forward, speed)
    } else if (receivedNumber == 2) {
        motobit.enable(MotorPower.On)
        motobit.setMotorSpeed(Motor.Left, MotorDirection.Reverse, speed)
        motobit.setMotorSpeed(Motor.Right, MotorDirection.Reverse, speed)
    } else if (receivedNumber == 3) {
        motobit.enable(MotorPower.On)
        motobit.setMotorSpeed(Motor.Left, MotorDirection.Reverse, speed)
        motobit.setMotorSpeed(Motor.Right, MotorDirection.Forward, speed)
    } else if (receivedNumber == 4) {
        motobit.enable(MotorPower.On)
        motobit.setMotorSpeed(Motor.Left, MotorDirection.Forward, speed)
        motobit.setMotorSpeed(Motor.Right, MotorDirection.Reverse, speed)
    } else if (receivedNumber == 0) {
        motobit.enable(MotorPower.Off)
    } else {
    	
    }
})
let speed = 0
let gr = 3
speed = 50
radio.setGroup(gr)
for (let index = 0; index < 2; index++) {
    basic.showIcon(IconNames.Heart)
    basic.showIcon(IconNames.SmallHeart)
}
basic.showNumber(gr)
basic.forever(function () {
	
})
