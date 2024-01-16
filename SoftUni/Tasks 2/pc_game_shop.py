games_sold = int(input())
hearthstone = 0
fornite = 0
overwatch = 0
others = 0
total = 0

for games in range(games_sold):
    game = input()
    total += 1

    if game == "Hearthstone":
        hearthstone += 1
    elif game == "Fornite":
        fornite += 1
    elif game == "Overwatch":
        overwatch += 1
    else:
        others += 1


hearthstone_percent = hearthstone / total * 100
fornite_percent = fornite / total * 100
overwatch_percent = overwatch / total * 100
others_percent = others / total * 100

print(f"Hearthstone - {hearthstone_percent:.2f}%")
print(f"Fornite - {fornite_percent:.2f}%")
print(f"Overwatch - {overwatch_percent:.2f}%")
print(f"Others - {others_percent:.2f}%")