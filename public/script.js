let inplist = $('#inplist')
let addbtn = $('#addbtn')
let clearbtn = $('#clearbtn')
let inptext = $('#inptext')
let bcleanup =$('#bcleanup')
let sortbtn=$('#sortbtn')


function sorts()
{
    $('#inplist .done').appendTo(inplist);
}
sortbtn.click(sorts);

function cleanup()
{
$('#inplist .done').remove();
}

bcleanup.click(cleanup);




function additem ()
{
    let listitem = $('<li>',{
        'class':'list-group-item ',
        text:inptext.val()
    })
    listitem.click(()=>
    listitem.toggleClass('done')
    )
   
    inplist.append(listitem)
    inplist.val('')
}

inptext.keypress((e)=>
{
    if(e.which===13)
    {
        additem();
    }
}
)

addbtn.click(additem)

clearbtn.click(()=>
{
    inptext.val('')
}
)

