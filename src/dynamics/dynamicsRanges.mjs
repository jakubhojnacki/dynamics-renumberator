/**
 * @module "DynamicsRanges" class (static)
 * @description Represents an array of Dynamics ranges (number / ID ranges)
 */

import { Validator } from "core-library";

export class DynamicsRanges extends Array {
    get terminal() { return global.theApplication.terminal; }

    constructor() {      
        super()          
    }

    //TODO - Review
    log(pIndentation) {
        const indentation = Number.validate(pIndentation);
        this.terminal.writeLine("ID Ranges:", indentation);
        for (const dynamicsRange of this)
            this.terminal.writeLine(dynamicsRange.toString(), indentation + 1);
    }

    //TODO - Review
    validate(pValidator, pRaiseError, pWithRenumbered) {
        const validator = pValidator ? pValidator : new Validator();
        const raiseError = Boolean.validate(pRaiseError);
        for (const range of this)
            range.validate(pValidator, false, pWithRenumbered);
        if (raiseError)
            validator.raiseErrorIfNotSuccess();
        return validator;
    }     

    //TODO - Review
    serialise() {
        let data = [];
        for (const dynamicsRange of this)
            data.push(dynamicsRange.serialise());
        return data;
    }    
}
