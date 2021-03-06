// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Appearing of "return" without a function body leads to syntax error
es5id: 12.9_A1_T3
description: Checking if execution of "return" within "try" statement fails
negative:
  phase: parse
  type: SyntaxError
---*/

throw "Test262: This statement should not be evaluated.";

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
try {
    return 1;
} catch(e){
    return 1;
}
//
//////////////////////////////////////////////////////////////////////////////
