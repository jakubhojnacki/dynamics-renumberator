/**
 * @module "DynamicsManifestSerialiser" class
 * @description Serialising and deserialising to / from Dynamics manifest
 * @version 0.0.1 (2021-09-03)
 */

import "../general/javaScript.js";
import DynamicsApplication from "./dynamicsApplication.js";
import DynamicsApplications from "./dynamicsApplications.js";
import DynamicsDependency from "./dynamicsDependency.js";
import DynamicsDependencies from "./dynamicsDependencies.js";
import DynamicsIdRange from "./dynamicsIdRange.js";
import DynamicsIdRanges from "./dynamicsIdRanges.js";
import DynamicsVersion from "./dynamicsVersion.js";

export default class DynamicsManifestSerialiser {
    static deserialiseDynamicsApplications(pData) {
        let object = new DynamicsApplications();
        if ((pData != null) && (Array.isArray(pData)))
            for (const dataItem of pData)
                object.push(DynamicsManifestSerialiser.deserialiseDynamicsApplication(dataItem));
        return object;
    }     

    static deserialiseDynamicsApplication(pData) {
        let object = null;
        if (pData != null) {
            const version = DynamicsVersion.parse(pData.version);
            const dependencies = DynamicsManifestSerialiser.deserialiseDynamicsDependencies(pData.dependencies);
            const idRanges = DynamicsManifestSerialiser.deserialiseDynamicsIdRanges(pData.idRanges);
            object = new DynamicsApplication(pData.id, pData.name, pData.publisher, version, dependencies, idRanges);
        }
        return object;
    }
        
    static deserialiseDynamicsDependencies(pData) {
        let object = new DynamicsDependencies();
        if ((pData != null) && (Array.isArray(pData)))
            for (const dataItem of pData)
                object.push(DynamicsManifestSerialiser.deserialiseDynamicsDependency(dataItem));
        return object;
    }    

    static deserialiseDynamicsDependency(pData) {
        let object = null;
        if (pData != null) {
            const id = (pData.id ? pData.id : pData.appId);
            const version = DynamicsVersion.parse(pData.version);
            object = new DynamicsDependency(id, pData.name, pData.publisher, version);
        }
        return object;
    }

    static deserialiseDynamicsIdRanges(pData) {
        let object = new DynamicsIdRanges();
        if ((pData != null) && (Array.isArray(pData)))
            for (const data of pData)
                object.push(DynamicsManifestSerialiser.deserialiseDynamicsIdRange(data));
        return object;
    }    

    static deserialiseDynamicsIdRange(pData) {
        let object = null;
        if (pData != null)
            object = new DynamicsIdRange(pData.from, pData.to);
        return object;
    }    
}