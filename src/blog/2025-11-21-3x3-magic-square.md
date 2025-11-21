---
title: How to Construct a 3×3 Magic Square
description: >-
  The post will feature how to mathematically construct a 3×3 Magic Square, as
  well as what constitutes a Magic Square in the first place. 
author: Janek
date: 2025-11-21T19:00:00.000Z
tags:
  - post
  - featured
image: /assets/blog/3x3_magic_square.png
imageAlt: An image of a 3×3 Magic Square
pdf: /assets/blog/magic_square_3x3.pdf
status: published
---
## What is a Magic Square?

A **magic square** is a square grid filled with distinct positive integers such that the sum of the numbers in each row, each column, and both main diagonals is the same. This constant sum is called the **magic constant**.

---

## Magic Constant Formula

For a *n × n* magic square, the magic constant *M* is given by:

\\[
M = \frac{n(n^2 + 1)}{2}
\\]

For a 3 × 3 square:

\\[
M = \frac{3(3^2 + 1)}{2}
= \frac{3(9 + 1)}{2}
= \frac{30}{2}
= 15
\\]

Each row, each column, and both main diagonals must add up to 15.

---

## Constructing an odd order Magic Square

The simplest method to construct an odd-order magic square is the **Siamese method** or the **De la Loubère method**. The Siamese method makes the creation of magic squares straightforward. The algorithm for doing so is the following.

1. Start with the number 1 in the middle of the top row.

2. Move up and right to place the next number. If this move goes out of bounds, wrap around.

3. If the cell is already filled or you move outside the top-right
corner, move one cell directly down instead.

4. Repeat Steps 2 & 3 until the square is filled.

---

## Finding the 3×3 Magic Square

Below is a correctly constructed 3×3 magic square using the Siamese method:

<table style="border-collapse: collapse; text-align: center;">
  <tr>
    <td style="border: 2px solid black; padding: 8px;"></td>
    <td style="border: 2px solid black; padding: 8px;">1</td>
    <td style="border: 2px solid black; padding: 8px;"></td>
  </tr>
  <tr>
    <td style="border: 2px solid black; padding: 8px;"></td>
    <td style="border: 2px solid black; padding: 8px;"></td>
    <td style="border: 2px solid black; padding: 8px;"></td>
  </tr>
  <tr>
    <td style="border: 2px solid black; padding: 8px;"></td>
    <td style="border: 2px solid black; padding: 8px;"></td>
    <td style="border: 2px solid black; padding: 8px;"></td>
  </tr>
</table>

Up and to the right would go out of bounds, so we loop around, and number 2 is at the third column, third row.

<table style="border-collapse: collapse; text-align: center;">
  <tr>
    <td style="border: 2px solid black; padding: 8px;"></td>
    <td style="border: 2px solid black; padding: 8px;">1</td>
    <td style="border: 2px solid black; padding: 8px;"></td>
  </tr>
  <tr>
    <td style="border: 2px solid black; padding: 8px;"></td>
    <td style="border: 2px solid black; padding: 8px;"></td>
    <td style="border: 2px solid black; padding: 8px;"></td>
  </tr>
  <tr>
    <td style="border: 2px solid black; padding: 8px;"></td>
    <td style="border: 2px solid black; padding: 8px;"></td>
    <td style="border: 2px solid black; padding: 8px;">2</td>
  </tr>
</table>

Up and to the right would go out of bounds, so we loop around, and number 3 is at the first column, second row.

<table style="border-collapse: collapse; text-align: center;">
  <tr>
    <td style="border: 2px solid black; padding: 8px;"></td>
    <td style="border: 2px solid black; padding: 8px;">1</td>
    <td style="border: 2px solid black; padding: 8px;"></td>
  </tr>
  <tr>
    <td style="border: 2px solid black; padding: 8px;">3</td>
    <td style="border: 2px solid black; padding: 8px;"></td>
    <td style="border: 2px solid black; padding: 8px;"></td>
  </tr>
  <tr>
    <td style="border: 2px solid black; padding: 8px;"></td>
    <td style="border: 2px solid black; padding: 8px;"></td>
    <td style="border: 2px solid black; padding: 8px;">2</td>
  </tr>
</table>


Now, when trying to go up to the right, number 1 is encountered, so we go down one from 3, and write number 4 in the first column, third row.

<table style="border-collapse: collapse; text-align: center;">
  <tr>
    <td style="border: 2px solid black; padding: 8px;"></td>
    <td style="border: 2px solid black; padding: 8px;">1</td>
    <td style="border: 2px solid black; padding: 8px;"></td>
  </tr>
  <tr>
    <td style="border: 2px solid black; padding: 8px;">3</td>
    <td style="border: 2px solid black; padding: 8px;"></td>
    <td style="border: 2px solid black; padding: 8px;"></td>
  </tr>
  <tr>
    <td style="border: 2px solid black; padding: 8px;">4</td>
    <td style="border: 2px solid black; padding: 8px;"></td>
    <td style="border: 2px solid black; padding: 8px;">2</td>
  </tr>
</table>

Up and to the right would yield number 5 in the second column, second row.

<table style="border-collapse: collapse; text-align: center;">
  <tr>
    <td style="border: 2px solid black; padding: 8px;"></td>
    <td style="border: 2px solid black; padding: 8px;">1</td>
    <td style="border: 2px solid black; padding: 8px;"></td>
  </tr>
  <tr>
    <td style="border: 2px solid black; padding: 8px;">3</td>
    <td style="border: 2px solid black; padding: 8px;">5</td>
    <td style="border: 2px solid black; padding: 8px;"></td>
  </tr>
  <tr>
    <td style="border: 2px solid black; padding: 8px;">4</td>
    <td style="border: 2px solid black; padding: 8px;"></td>
    <td style="border: 2px solid black; padding: 8px;">2</td>
  </tr>
</table>

Up and to the right would yield number 6 in the third column, first row.

<table style="border-collapse: collapse; text-align: center;">
  <tr>
    <td style="border: 2px solid black; padding: 8px;"></td>
    <td style="border: 2px solid black; padding: 8px;">1</td>
    <td style="border: 2px solid black; padding: 8px;">6</td>
  </tr>
  <tr>
    <td style="border: 2px solid black; padding: 8px;">3</td>
    <td style="border: 2px solid black; padding: 8px;">5</td>
    <td style="border: 2px solid black; padding: 8px;"></td>
  </tr>
  <tr>
    <td style="border: 2px solid black; padding: 8px;">4</td>
    <td style="border: 2px solid black; padding: 8px;"></td>
    <td style="border: 2px solid black; padding: 8px;">2</td>
  </tr>
</table>

Now, when trying to go up to the right, number 4 is encountered, so we go down one from 6, and write number 7 in the third column, second row.

<table style="border-collapse: collapse; text-align: center;">
  <tr>
    <td style="border: 2px solid black; padding: 8px;"></td>
    <td style="border: 2px solid black; padding: 8px;">1</td>
    <td style="border: 2px solid black; padding: 8px;">6</td>
  </tr>
  <tr>
    <td style="border: 2px solid black; padding: 8px;">3</td>
    <td style="border: 2px solid black; padding: 8px;">5</td>
    <td style="border: 2px solid black; padding: 8px;">7</td>
  </tr>
  <tr>
    <td style="border: 2px solid black; padding: 8px;">4</td>
    <td style="border: 2px solid black; padding: 8px;"></td>
    <td style="border: 2px solid black; padding: 8px;">2</td>
  </tr>
</table>


Up and to the right would go out of bounds, so we loop around, and number 8 is at the first column, first row.

<table style="border-collapse: collapse; text-align: center;">
  <tr>
    <td style="border: 2px solid black; padding: 8px;">8</td>
    <td style="border: 2px solid black; padding: 8px;">1</td>
    <td style="border: 2px solid black; padding: 8px;">6</td>
  </tr>
  <tr>
    <td style="border: 2px solid black; padding: 8px;">3</td>
    <td style="border: 2px solid black; padding: 8px;">5</td>
    <td style="border: 2px solid black; padding: 8px;">7</td>
  </tr>
  <tr>
    <td style="border: 2px solid black; padding: 8px;">4</td>
    <td style="border: 2px solid black; padding: 8px;"></td>
    <td style="border: 2px solid black; padding: 8px;">2</td>
  </tr>
</table>


Up and to the right would go out of bounds, so we loop around, and number 9 is at the second column, third row.

<table style="border-collapse: collapse; text-align: center;">
  <tr>
    <td style="border: 2px solid black; padding: 8px;">8</td>
    <td style="border: 2px solid black; padding: 8px;">1</td>
    <td style="border: 2px solid black; padding: 8px;">6</td>
  </tr>
  <tr>
    <td style="border: 2px solid black; padding: 8px;">3</td>
    <td style="border: 2px solid black; padding: 8px;">5</td>
    <td style="border: 2px solid black; padding: 8px;">7</td>
  </tr>
  <tr>
    <td style="border: 2px solid black; padding: 8px;">4</td>
    <td style="border: 2px solid black; padding: 8px;">9</td>
    <td style="border: 2px solid black; padding: 8px;">2</td>
  </tr>
</table>

The final result is the following.

<table style="border-collapse: collapse; text-align: center;">
  <tr>
    <td style="border: 2px solid black; padding: 8px;">8</td>
    <td style="border: 2px solid black; padding: 8px;">1</td>
    <td style="border: 2px solid black; padding: 8px;">6</td>
  </tr>
  <tr>
    <td style="border: 2px solid black; padding: 8px;">3</td>
    <td style="border: 2px solid black; padding: 8px;">5</td>
    <td style="border: 2px solid black; padding: 8px;">7</td>
  </tr>
  <tr>
    <td style="border: 2px solid black; padding: 8px;">4</td>
    <td style="border: 2px solid black; padding: 8px;">9</td>
    <td style="border: 2px solid black; padding: 8px;">2</td>
  </tr>
</table>


## Validating the Magic Square

### Rows
- Row 1: \(8 + 1 + 6 = 15\)
- Row 2: \(3 + 5 + 7 = 15\)
- Row 3: \(4 + 9 + 2 = 15\)

### Columns
- Col 1: \(8 + 3 + 4 = 15\)
- Col 2: \(1 + 5 + 9 = 15\)
- Col 3: \(6 + 7 + 2 = 15\)

### Diagonals
- Diagonal 1: \(8 + 5 + 2 = 15\)
- Diagonal 2: \(6 + 5 + 4 = 15\)

---

**Quod Erat Demonstrandum**

