
var searchText;

function addPost()
{
    searchText=document.form1.textArea.value;

    if(searchText!=='')
    {
     var x=document.getElementById('contentArea');
     x.insertBefore(createPostDiv('Anil Das'),x.firstChild);   
    }
}

function createPostDiv(userName)
{    
    var dynamicDiv1 = document.createElement("div");
    dynamicDiv1.className = "dynamicDiv1";
    
    var dynamicDiv2 = document.createElement("div");
    dynamicDiv2.className = "dynamicDiv2";
    dynamicDiv2.innerHTML = "<img class=userImage src=./../images/sample.gif>";
    dynamicDiv1.appendChild(dynamicDiv2);
    
    var dynamicDiv3 = document.createElement("div");
    dynamicDiv3.className = "dynamicDiv3";
    dynamicDiv3.innerHTML = "<b>" + userName + "</b> <br>" + " &nbsp;" + searchText;
    dynamicDiv1.appendChild(dynamicDiv3);
    
    var dynamicDiv4 = document.createElement("div");
    dynamicDiv4.className = "dynamicDiv4";
    dynamicDiv4.innerHTML = "<ul> <center> <li class=likeContainer> <a href=#> <img class=likeImage src=./../images/sample.gif> Like </a></li> <li class=likeContainer> <a href=#> <img class=likeImage src=./../images/sample.gif> Comment </a></li> <li class=likeContainer> <a href=#> <img class=likeImage src=./../images/sample.gif> Share </a></li></center></ul>";
    dynamicDiv1.appendChild(dynamicDiv4);
    
    return dynamicDiv1;
}

function resizeOnFocus(textArea)
{
    if(textArea.value==='')
    textArea.style.height=62;
    var postButtonOuterDiv = document.getElementById('postButtonOuterDiv');
    postButtonOuterDiv.style.display= 'block';
}

/* 
   
    var dynamicDiv5 = document.createElement("div");
    dynamicDiv5.className = "dynamicDiv5";
    dynamicDiv5.innerHTML = "<b>User Name</b> <br>";
    dynamicDiv1.insertBefore(dynamicDiv5,dynamicDiv3);

   
   var pattern = /<(.*)>/;

function hasHtmlTags(string) 
{
    return pattern.test(string);
};

if (hasHtmlTags(userData)) 
{
    // Do something?
} else {
    // Create entity.
}

var lt = /</g, 
    gt = />/g, 
    ap = /'/g, 
    ic = /"/g;
value = value.toString().replace(lt, "&lt;").replace(gt, "&gt;").replace(ap, "&#39;").replace(ic, "&#34;");

  if (i===0)
     {
       x.appendChild(createPostDiv('Anil Das'));
       i++;
     }
     else
*/
