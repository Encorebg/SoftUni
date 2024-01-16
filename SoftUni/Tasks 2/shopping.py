budget = float(input())
number_of_vga = int(input())
number_of_cpu = int(input())
number_of_ram = int(input())

vga_price = number_of_vga * 250
cpu_price = number_of_cpu * (vga_price * 0.35)
ram_price = number_of_ram * (vga_price * 0.1)

total_price = vga_price + cpu_price + ram_price

if number_of_vga > number_of_cpu:
    total_price *= 0.85

diff = abs(total_price - budget)

if budget >= total_price:
    print(f"You have {diff:.2f} leva left!")
else:
    print(f"Not enough money! You need {diff:.2f} leva more!")