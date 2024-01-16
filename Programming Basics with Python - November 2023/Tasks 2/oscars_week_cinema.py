name_of_movie = input()
type_of_hall = input()
tickets_bought = int(input())

if name_of_movie == "A Star Is Born":
    if type_of_hall == "normal":
        price = 7.50
    elif type_of_hall == "luxury":
        price = 10.50
    else:
        price = 13.50
elif name_of_movie == "Bohemian Rhapsody":
    if type_of_hall == "normal":
        price = 7.35
    elif type_of_hall == "luxury":
        price = 9.45
    else:
        price = 12.75
elif name_of_movie == "Green Book":
    if type_of_hall == "normal":
        price = 8.15
    elif type_of_hall == "luxury":
        price = 10.25
    else:
        price = 13.25
else:
    if type_of_hall == "normal":
        price = 8.75
    elif type_of_hall == "luxury":
        price = 11.55
    else:
        price = 13.95

profit = price * tickets_bought
print(f"{name_of_movie} -> {profit:.2f} lv.")
