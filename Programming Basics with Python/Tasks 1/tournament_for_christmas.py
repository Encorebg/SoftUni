days_of_tournament = int(input())
total_money_won = 0
total_games_won = 0
total_games_lost = 0
for days in range(days_of_tournament):
    games_won_day = 0
    games_lost_day = 0
    money_won_day = 0

    while True:
        command = input()
        if command == "Finish":
            break
        result = input()
        if result == "win":
            games_won_day += 1
            money_won_day += 20
        else:
            games_lost_day += 1

    if games_won_day > games_lost_day:
        money_won_day *= 1.1

    total_money_won += money_won_day
    total_games_won += games_won_day
    total_games_lost += games_lost_day



if total_games_won > total_games_lost:
    total_money_won *= 1.2
    print(f"You won the tournament! Total raised money: {total_money_won:.2f}")
else:
    print(f"You lost the tournament! Total raised money: {total_money_won:.2f}")