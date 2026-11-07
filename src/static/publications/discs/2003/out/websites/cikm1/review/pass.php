<HTML>
<HEAD>
<META name=VI60_defaultClientScript content=VBScript>
<META NAME="GENERATOR" Content="Microsoft FrontPage 4.0">
</HEAD>
<BODY background="image/map106.gif">

<SCRIPT LANGUAGE=javascript>
<!--
function isNumeric(string) { 
  if (string.length == 0) return false; 
  var digits = "0123456789"; 
  for (i=0; i<string.length; i++) { 
   if(digits.indexOf(string.charAt(i),0) == -1) 
    return false; 
  } 
  return true; 
 }
/*-----------------------------*/ 
function pass_onsubmit()
{
idval = document.frm_pass.Id.value ;
pwdval = document.frm_pass.pwd.value ;
if (idval.length == 0)
{
	alert('Please enter your id');
	document.frm_pass.action = 'pass.php';
	return;
}

if (pwdval.length == 0)
{
	alert('Please enter your password');
	document.frm_pass.action = 'pass.php';
	return;
}

Selval = document.frm_pass.SelectedOption.value;
if (Selval.substr(0,1) == '1') // the paper id is there
{
	if (!isNumeric(idval))
	{
		alert("The paper id should contain numeric value"); 
		document.frm_pass.action = 'pass.php';
		return;		
	}
}

document.frm_pass.action = 'Login.php';
}
-->
</SCRIPT>



<form name="frm_pass" method="POST" action=Login.php id="frm_pass" onsubmit="pass_onsubmit()">
  <table border="0" cellpadding="0" cellspacing="0" width="887">
    <tr>
		<td colspan=2> <h3><font color="#003399">Please provide a valid ID and Password.. </font></h3></td><BR><BR>
    </tr>
    <tr>
      <td width="81"><b><font color="#FF6600">
		User ID      </font></b></td>
      <td width="802"><input type="text" id="Id" name="Id" size="20"></td>
    </tr>
    <tr>
      <td width="101" height='81'><b><font color="#FF6600">Password</font></b></td>
      <td width="802" height='81'><input type="password" id="pwd" name="pwd" size="20"></td>
    </tr>
    <tr>
      <td width="883" colspan="2">
		<input type="submit" value="        OK            " name="Login" id="Login">
		<input id="SelectedOption" name="SelectedOption" type="hidden" value=0>
      </td>
    </tr>
    <tr>
		<td colspan=2>
			<br>
			<font color="#003399">
			  
			</font>
		</td>
    </tr>
  </table>
</form>
</BODY>
</HTML>
