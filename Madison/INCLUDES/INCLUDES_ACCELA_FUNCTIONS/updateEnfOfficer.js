 function updateEnfOfficer(enfName) // option CapId
    {
    var itemCap = capId
    if (arguments.length > 1) itemCap = arguments[1]; // use cap ID specified in args

    var cdScriptObjResult = aa.cap.getCapDetail(itemCap);
    if (!cdScriptObjResult.getSuccess())
        { logDebug("**ERROR: No cap detail script object : " + cdScriptObjResult.getErrorMessage()) ; return false; }

    var cdScriptObj = cdScriptObjResult.getOutput();

    if (!cdScriptObj)
        { logDebug("**ERROR: No cap detail script object") ; return false; }

    cd = cdScriptObj.getCapDetailModel();

    cd.setEnforceOfficerName(enfName);

    cdWrite = aa.cap.editCapDetail(cd)

    if (cdWrite.getSuccess())
        { logDebug("updated enf officer name to " + enfName) }
    else
        { logDebug("**ERROR writing capdetail : " + cdWrite.getErrorMessage()) ; return false ; }
    }

