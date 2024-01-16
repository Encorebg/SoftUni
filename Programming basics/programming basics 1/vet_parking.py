number_of_days = int(input())
number_of_hours = int(input())
tax_counter_for_day = 0
total_tax = 0
for days in range(1, number_of_days + 1):
    for hours in range(1, number_of_hours + 1):
        if days % 2 == 0 and hours % 2 != 0:
            tax = 2.50
        elif days % 2 != 0 and hours % 2 == 0:
            tax = 1.25
        else:
            tax = 1
        tax_counter_for_day += tax

    print(f"Day: {days} - {tax_counter_for_day:.2f} leva")
    total_tax += tax_counter_for_day
    tax_counter_for_day = 0

print(f"Total: {total_tax:.2f} leva")