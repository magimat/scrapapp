<?php


	ini_set('display_errors', 1);
	ini_set('display_startup_errors', 1);
	error_reporting(E_ALL);


define("IN_MYBB", 1);
define("IGNORE_CLEAN_VARS", "sid");
define('THIS_SCRIPT', 'customprivate.php');

$templatelist = "private_send,private_send_buddyselect,private_read,private_tracking,private_tracking_readmessage,private_tracking_unreadmessage,private_orderarrow,usercp_nav_attachments,usercp_nav_messenger_compose,private_tracking_readmessage_stop";
$templatelist .= ",private_folders,private_folders_folder,private_folders_folder_unremovable,private,usercp_nav,private_empty_folder,private_empty,private_archive_txt,private_archive_csv,private_archive_html,private_tracking_unreadmessage_stop";
$templatelist .= ",usercp_nav_messenger,usercp_nav_changename,usercp_nav_profile,usercp_nav_misc,multipage,multipage_end,multipage_jump_page,multipage_nextpage,multipage_page,multipage_page_current,multipage_page_link_current,multipage_prevpage,multipage_start,usercp_nav_editsignature,posticons_icon";
$templatelist .= ",private_messagebit,codebuttons,smilieinsert,smilieinsert_getmore,smilieinsert_smilie,smilieinsert_smilie_empty,posticons,private_send_autocomplete,private_messagebit_denyreceipt,private_read_to,postbit_online,postbit_warninglevel_formatted,postbit_iplogged_hiden";
$templatelist .= ",postbit_delete_pm,postbit,private_tracking_nomessage,private_nomessages,postbit_author_guest,private_multiple_recipients_user,private_multiple_recipients_bcc,private_multiple_recipients,usercp_nav_messenger_folder";
$templatelist .= ",private_search_messagebit,private_search_results_nomessages,private_search_results,private_advanced_search,previewpost,private_send_tracking,private_send_signature,private_read_bcc,private_composelink,postbit_purgespammer";
$templatelist .= ",private_archive,private_quickreply,private_pmspace,private_limitwarning,postbit_groupimage,postbit_offline,postbit_www,postbit_replyall_pm,postbit_signature,postbit_classic,postbit_gotopost,postbit_userstar,postbit_reputation_formatted_link,postbit_icon";
$templatelist .= ",private_archive_folders_folder,private_archive_folders,postbit_warninglevel,postbit_author_user,postbit_reply_pm,postbit_forward_pm,private_messagebit_icon,private_jump_folders_folder,private_advanced_search_folders";
$templatelist .= ",private_jump_folders,postbit_avatar,postbit_warn,postbit_rep_button,postbit_email,postbit_reputation,private_move,private_read_action,postbit_away,postbit_pm,usercp_nav_messenger_tracking,postbit_find,private_emptyexportlink";

require_once "../forum/global.php";
require_once MYBB_ROOT."../forum/inc/functions_post.php";
require_once MYBB_ROOT."../forum/inc/functions_user.php";
require_once MYBB_ROOT."../forum/inc/class_parser.php";
$parser = new postParser;

// Load global language phrases
$lang->load("private");



$plugins->run_hooks("private_start");



$send_errors = '';



$sujet = "test msg massif";
$message = "blablabla si tu peut lire ceci dans un mail, c'est merveilleux!";
$touser = "magi";





// send method

$plugins->run_hooks("private_send_do_send");

$to = array_map("trim", explode(",", $touser));



require_once MYBB_ROOT."../forum/inc/datahandlers/pm.php";
$pmhandler = new PMDataHandler();



$pm = array(
	"subject" => $sujet,
	"message" => $message,
	"icon" => -1,
	"fromid" => $mybb->user['uid'],
	"do" => "",
	"pmid" => 0,
	"ipaddress" => $session->packedip
);

$pm['to'] = $to;

$pm['options'] = array();
$pm['options']['signature'] = 0;
$pm['options']['savecopy'] = 0;




$pmhandler->set_data($pm);

$pmhandler->validate_pm();
$pminfo = $pmhandler->insert_pm();


$plugins->run_hooks("private_do_send_end");



echo "msg sent ok!";



