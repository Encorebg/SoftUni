floors = int(input())
rooms = int(input())
room_numbers = ""
for floor in reversed(range(floors)):
    for room in range(rooms):
        current_number_of_rooms = floor * 10 + room
        if floors == floor:
            print(f"L{current_number_of_rooms}", end=" ")
        elif floor % 2 == 0:
            room_numbers += f'O{current_number_of_rooms} '
        else:
            room_numbers += f'A{current_number_of_rooms} '
    print(room_numbers)
    room_numbers = ""
