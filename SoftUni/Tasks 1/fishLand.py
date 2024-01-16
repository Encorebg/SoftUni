skumriq_price = float(input())
caca_price = float(input())
palamud_kilograms = float(input())
safrid_kilograms = float(input())
midi_kilograms = float(input())

palamud_price = skumriq_price * 1.6
safrid_price = caca_price * 1.8
total_price =  palamud_kilograms * palamud_price + safrid_kilograms * safrid_price + midi_kilograms * 7.50
print(f'{total_price:.2f}')