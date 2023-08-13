# Pulse Width Modulation

Pulse Width Modulation (PWM) is a technique used in electronics to generate analog signals using digital means. It works by switching a signal between ON and OFF states rapidly.

Let's break this down:

1. "Pulse" refers to the digital signal, which is either ON (usually represented by a high voltage level) or OFF (usually represented by a low voltage level).
2. "Width" refers to the duration of time that the pulse is ON within a given period.
3. "Modulation" means to vary or change something. In PWM, we vary the width of the pulse - specifically, the amount of time it stays ON.

By changing the amount of time the signal is ON versus the time it is OFF (called the duty cycle), PWM can simulate an analog signal.

For example, if a pulse is ON half the time and OFF half the time, the duty cycle is 50%, and the average value of the signal is halfway between the ON and OFF voltages. If the pulse is ON 75% of the time, the duty cycle is 75%, and the average value is higher.

Here's the metaphor:

Think of a light bulb connected to a light switch. If you flip the switch on and off very fast, faster than the eye can see, the room would appear to be somewhere between fully lit and fully dark, depending on how long you leave the switch on compared to when it's off.

If you have the switch on half of the time and off half of the time, the room will appear half as bright as fully lit. If you have the switch on three-quarters of the time, the room will appear brighter.

That's essentially what PWM does. It turns the digital signal on and off very quickly, and by adjusting how long it's on compared to how long it's off, it can simulate an "average" value somewhere between the high and low voltage levels. It's commonly used to control things like the brightness of LEDs or the speed of motors.
