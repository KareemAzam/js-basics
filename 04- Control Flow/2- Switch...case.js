/** Switch
 *  Compare variable value against other value
 * Definition
 * switch(variable){
 *      case 'variable value':
 *          statement
 *      break;
 *      case 'variable value':
 *          statement
 *      break;
 *      default:
 *          statement
 * }
 */

let role = "guest";

switch (role) {
  case "guest":
    console.log("Guest User");
    break;
  case "moderator":
    console.log("Moderator User");
    break;
  default:
    console.log("Unknown User");
}
