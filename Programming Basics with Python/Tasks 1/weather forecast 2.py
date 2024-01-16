degrees = float(input())

if 35 >= degrees >= 26:
    print("Hot")
elif 25.9 >= degrees >= 20.1:
    print("Warm")
elif 20 >= degrees >= 15:
    print("Mild")
elif 14.9 >= degrees >= 12:
    print("Cool")
elif 11.9 >= degrees >= 5:
    print("Cold")
else:
    print("unknown")
