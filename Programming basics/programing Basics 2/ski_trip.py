days_to_stay = int(input())
type_of_room = input()
feedback = input()
room_for_one_person = 18
apartment = 25
president_apartment = 35
total_cost = 0
days_to_stay -= 1
if days_to_stay < 10:
    if type_of_room == "apartment":
        apartment *= 0.7
        total_cost = days_to_stay * apartment
    elif type_of_room == "president apartment":
        president_apartment *= 0.9
        total_cost = days_to_stay * president_apartment
    else:
        total_cost = room_for_one_person * days_to_stay
elif 10 <= days_to_stay <= 15:
    if type_of_room == "apartment":
        apartment *= 0.65
        total_cost = days_to_stay * apartment
    elif type_of_room == "president apartment":
        president_apartment *= 0.85
        total_cost = days_to_stay * president_apartment
    else:
        total_cost = room_for_one_person * days_to_stay
else:
    if type_of_room == "apartment":
        apartment *= 0.5
        total_cost = days_to_stay * apartment
    elif type_of_room == "president apartment":
        president_apartment *= 0.8
        total_cost = days_to_stay * president_apartment
    else:
        total_cost = room_for_one_person * days_to_stay

if feedback == "positive":
    total_cost *= 1.25
else:
    total_cost *= 0.9
print(f'{total_cost:.2f}')

