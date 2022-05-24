# Dibujar un tablero de ajedrez 8 x 8 basico.

for fila in range (8):
    print ("\n")
    for columna in range (8):
        if (fila + columna) % 2 == 0:
            print("X", end = "  ")
        else:
            print("O", end = "  ")
            