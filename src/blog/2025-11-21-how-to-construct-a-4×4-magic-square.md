---
title: How to Construct a 4×4 Magic Square
description: >-
  The post will feature how to mathematically construct a 4×4 Magic Square, as
  well as what constitutes a Magic Square in the first place. 
author: Janek
date: 2025-11-29T19:58:30.000Z
tags:
  - ''
status: draft
---

## What is a Magic Square?

A **magic square** is a square grid filled with distinct positive integers such that the sum of the numbers in each row, each column, and both main diagonals is the same. This constant sum is called the **magic constant**.

---

## Magic Constant Formula

For a *n × n* magic square, the magic constant *M* is given by:

\\[
M = \frac{n(n^2 + 1)}{2}
\\]

For a 4 × 4 square:

\\[
M = \frac{4(4^2 + 1)}{2}
= \frac{4(16 + 1)}{2}
= \frac{68}{2}
= 34
\\]

Each row, each column, and both main diagonals must add up to 34.

---

## Constructing an even order Magic Square

In contrast to constructing an odd-order magic square, using the **Siamese method** or the **De la Loubère method**, a new strategy will be used. To construct an even-order 4×4
magic square, the algorithm for doing so is the following:

1. Fill the entire 4 × 4 square with numbers from 1 to 16 in order.

2. Identify the pattern of positions to keep and replace:
   - Keep numbers in diagonally symmetric cells (top-left to bottom-right and top-right to bottom-left).
   - Replace the rest with their complement with respect to 17 (that is, 17−original number).

---

## Finding the 4×4 Magic Square

Below is a correctly constructed 4×4 magic square using this new algorithm.

<center>

|    |    |    |    |
|----|----|----|----|
|  1 |  2 |  3 |  4 |
|  5 |  6 |  7 |  8 |
|  9 | 10 | 11 | 12 |
| 13 | 14 | 15 | 16 |

</center>

The numbers in diagonally symmetric cells (top-left to bottom-right and top-right to bottom-left) are now kept in the same place, whereas the other numbers are replaced with their
complement with respect to 17 (that is, 17− original number).

<center>

|    |    |    |    |
|----|----|----|----|
|  1 |    |    |  4 |
|    |  6 |  7 |    |
|    | 10 | 11 |    |
| 13 |    |    | 16 |

</center>

---

Compliment Calculation:

(Row 1, Column 2) 17 - 2 = 15

(Row 1, Column 3) 17 - 3 = 14

(Row 2, Column 1) 17 - 5 = 12

(Row 2, Column 4) 17 - 8 = 9

(Row 3, Column 1) 17 - 9 = 8

(Row 3, Column 4) 17 - 12 = 5

(Row 4, Column 2) 17 - 14 = 3

(Row 4, Column 3) 17 - 15 = 2


The final result is the following.

<center>

|    |    |    |    |
|----|----|----|----|
|  1 | 15 | 14 |  4 |
| 12 |  6 |  7 |  9 |
|  8 | 10 | 11 |  5 |
| 13 |  3 |  2 | 16 |

</center>

Now we will validate whether all the row numbers, column numbers, and diagonal numbers in fact add up to 34.

## Validating the Magic Square

Rows
- Row 1: 1 + 15 + 14 + 4 = 34
- Row 2: 12 + 6 + 7 + 9 = 34
- Row 3: 8 + 10 + 11 + 5 = 34
- Row 4: 13 + 3 + 2 + 16 = 34

Columns
- Column 1: 1 + 12 + 8 + 13 = 34
- Column 2: 15 + 6 + 10 + 3 = 34
- Column 3: 14 + 7 + 11 + 2 = 34
- Column 4: 4 + 9 + 5 + 16 = 34

Diagonals
- Diagonal 1: 13 + 10 + 7 + 4 = 34
- Diagonal 2: 1 + 6 + 11 + 16 = 34

---

<center>

**Quod Erat Demonstrandum**

</center>
