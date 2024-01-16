room_capacity = int(input())
people_counter = 0
total_people_in = 0
full_cinema = False
command = input()
total_tax = 0

while command != "Movie time!":
    people_entering = int(command)
    people_counter += people_entering
    total_people_in += people_counter

    if total_people_in > room_capacity:
        full_cinema = True
        break

    tax_to_pay = people_entering * 5

    if people_counter % 3 == 0:
        tax_to_pay -= 5

    total_tax += tax_to_pay
    people_counter = 0
    command = input()

if full_cinema:
    print("The cinema is full.")
else:
    room_capacity -= total_people_in
    print(f"There are {room_capacity} seats left in the cinema.")
print(f"Cinema income - {total_tax} lv.")