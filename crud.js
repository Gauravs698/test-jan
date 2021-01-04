
function AddListItem()
{
    debugger;
    var fname=$('#empname').val();
    var desig=$('#desg').val();
    var team=$('#team').val();
    var email=$('#email').val();
    var url=_spPageContextInfo.webAbsoluteUrl+"/_api/web/lists/GetByTitle('EmpInfo')/items";
    var data=JSON.stringify(
        {
            "_metadata":{"type":"SP.Data.EmpInfoListItem"},
            "FirstName":fname,
            "Designtion":desig,
            "Team":team,
            "Email":email,
        }
    )
    $.ajax
    (
        {
            url:url,
            type:"POST",
            data:data,
            
            headers:
            {
                "Accept":"application/json;odata=verbose",
                "content-type":"application/json;odata=verbose",
                "X-RequestDigest":$("#_REQUESTDIGEST").val()
            },
            succes:function(data)
            {
                alert("item created successfully");
            },
            error:function(error)
            {
                alert("item failed to create");
            }
        }
    );
}