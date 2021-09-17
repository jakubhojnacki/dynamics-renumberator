/**
 * @module "ArgTemplateFactory" class
 * @description Creates arg templates
 * @version 0.0.1 (2021-08-12)
 */

import "../general/javaScript.js";
import ArgName from "./argName.js";
import ArgTemplate from "../general/argTemplate.js";
import ArgTemplates from "../general/argTemplates.js";
import DataType from "../general/dataType.js";

export default class ArgTemplateFactory {
    static get argTemplates() { 
        return new ArgTemplates([
            new ArgTemplate(0, ArgName.directoryPath, "Path to a directory with Dynamics solution", DataType.string, true),
            new ArgTemplate([ "s", "settings" ], ArgName.settings, "Path to settings file", DataType.string),
            new ArgTemplate([ "d", "debugMode" ], ArgName.debugMode, "Defines debug mode (\"true\" or \"false\")", DataType.boolean)
        ]);        
    }
}