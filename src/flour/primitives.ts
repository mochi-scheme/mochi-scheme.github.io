///
/// File: flour/primitives.ts 
/// Copyright (c) 2022 Kosi Nwabueze and Anirudh Rahul
///
/// This program is free software: you can redistribute it and/or modify
/// it under the terms of the GNU Lesser General Public License as published by
/// the Free Software Foundation, either version 3 of the License, or
/// (at your option) any later version.
///
/// This program is distributed in the hope that it will be useful,
/// but WITHOUT ANY WARRANTY; without even the implied warranty of
/// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
/// GNU General Public License for more details.
///
/// You should have received a copy of the GNU Lesser General Public License
/// along with this program.  If not, see <https://www.gnu.org/licenses/>.
///

export enum FlourPrimitiveMethodCodes {
  // Math
  SUBTRACT = 0,
  MULTIPLY,
  ADD,
  DIVIDE,
  NOT,
  NEGATE,
  ABS,

  // Compare
  EQV,
  LESS,
  LEQ,
  GREATER,
  GEQ,

  // List
  CONS,
  CAR,
  CDR,

  // Predicates
  IS_BOOLEAN,
  IS_CHARACTER,
  IS_FIXNUM,
  IS_NIL,

  IS_PROCEDURE,
  IS_SYMBOL,
  IS_PAIR,

  // IO
  PRINT,
}

type PrimitiveInstructions = Record<FlourPrimitiveMethodCodes, string>;

export const primitiveBindings: PrimitiveInstructions = {
  [FlourPrimitiveMethodCodes.SUBTRACT]: "-",
  [FlourPrimitiveMethodCodes.MULTIPLY]: "*",
  [FlourPrimitiveMethodCodes.ADD]: "+",
  [FlourPrimitiveMethodCodes.DIVIDE]: "/",
  [FlourPrimitiveMethodCodes.NOT]: "not",
  [FlourPrimitiveMethodCodes.NEGATE]: "negate",
  [FlourPrimitiveMethodCodes.ABS]: "abs",
  [FlourPrimitiveMethodCodes.EQV]: "eqv?",
  [FlourPrimitiveMethodCodes.LESS]: "<",
  [FlourPrimitiveMethodCodes.LEQ]: "<=",
  [FlourPrimitiveMethodCodes.GREATER]: ">",
  [FlourPrimitiveMethodCodes.GEQ]: ">=",
  [FlourPrimitiveMethodCodes.CONS]: "cons",
  [FlourPrimitiveMethodCodes.CAR]: "car",
  [FlourPrimitiveMethodCodes.CDR]: "cdr",
   [FlourPrimitiveMethodCodes.IS_BOOLEAN]: "boolean?",
   [FlourPrimitiveMethodCodes.IS_CHARACTER]: "character?",
   [FlourPrimitiveMethodCodes.IS_FIXNUM]: "number?",
   [FlourPrimitiveMethodCodes.IS_NIL]: "null?",
   [FlourPrimitiveMethodCodes.IS_PROCEDURE]: "procedure?",
   [FlourPrimitiveMethodCodes.IS_SYMBOL]: "symbol?",
   [FlourPrimitiveMethodCodes.IS_PAIR]: "pair?",
   [FlourPrimitiveMethodCodes.PRINT]: "print",
};