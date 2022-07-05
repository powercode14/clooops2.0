import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @charset "utf-8";

  *, :after, :before {box-sizing:border-box;}
  html, body {font-family:'Noto Sans KR', 'Malgun Gothic', '맑은 고딕', sans-serif; font-size:14px; color:#000; letter-spacing: -0.6px;}

  /* scrollbar */
  ::-webkit-scrollbar {-webkit-appearance:none; height:7px; width:7px;}
  ::-webkit-scrollbar-thumb {background: #D7D9DF; border-radius:0;}
  ::-webkit-scrollbar-thumb:hover {background:#b2b4bd;}
  ::-webkit-scrollbar-thumb:horizontal{background: #D7D9DF; border-radius:0;}

  /* placeholder */
  ::-webkit-input-placeholder {color: #adadad; font-size:13px; font-weight: 300;}
  ::placeholder {color: #adadad; font-size:13px; font-weight: 300;}

  /* form */
  input:focus, textarea:focus {border-color:#000;}
  input[disabled], select[disabled] {background:#f5f7f9; -webkit-appearance: none;}
  textarea {resize: none;}
  table th {text-align:left;}

  /* heading & font-size */
  h1, h2, h3, h4, h5, h6 {font-weight:500;}
  .h1, h1 { font-size: 34px !important;}
  .h2, h2, .ft-massive { font-size: 28px !important;}
  .h3, h3, .ft-huge { font-size: 24px !important;}
  .h4, h4, .ft-big { font-size: 20px !important;}
  .h5, h5, .ft-large { font-size: 18px !important;}
  .h6, h6, .ft-medium { font-size: 16px !important;}
  .ft-default {font-size:14px !important;}
  .ft-small {font-size:13px !important;}
  .ft-tiny {font-size:11px !important;}

  /* a */
  a {color:#172b4d;}
  a, button {padding:0; background:inherit; border:none; appearance: none; -webkit-appearance: none;}
  a, a:active, a:hover, button {text-decoration:none;}
  a:hover, button:hover {cursor: pointer;}
  .link {color:#3182f6;}
  .link:hover {text-decoration: underline;}
  .hover:hover {text-decoration: underline;}
  .underline {text-decoration: underline;}

  /* font-color */
  .essential {color:#ff003e;}

  .ft-white {color:#fff;}
  .ft-black {color:#000;}
  .ft-darkgray {color:#767676;}
  .ft-gray {color:#a6a6a6;}
  .ft-lightgray {color:#dadada;}
  .ft-red {color:#ff003e;}
  .ft-green {color:#33C534;}
  .ft-blue, .ft-primary {color: #3182f6;}
  .ft-purple {color:#8639B4;}

  mark {font-weight:600; background:transparent; color:inherit;}

  /* font-wieght */
  b, .b {font-weight:500;}

  .ft-100 {font-weight:100 !important;}
  .ft-300 {font-weight:300 !important;}
  .ft-400 {font-weight:400 !important;}
  .ft-500 {font-weight:500 !important;}
  .ft-600 {font-weight:600 !important;}

  /* background */
  .bg-main {background:#F5F7FA;}
  .bg-lightgray {background:#f7f7f7;}
  .bg-lightyellow {background:#ffffc2;}
  .bg-lightpurple {background:#f4edff;}

  /* border */
  .bdr {border-style:solid; border-width:1px;}
  .bdr-blue {border-color:#4D94FF;}
  .bdr-purple {border-color:#8639B4;}
  .bdr-gray {border-color:#ccc;}

  /* ellipsis */
  .ellipsis {overflow: hidden !important; text-overflow: ellipsis !important; white-space: nowrap;}
  .ellipsis.line-clamp-1 {line-height:1.5; max-height:1.5em; white-space:normal;  word-wrap: break-word; display: -webkit-box; -webkit-line-clamp: 1; -webkit-box-orient: vertical; word-break: break-all;}
  .ellipsis.line-clamp-2 {line-height:1.5; max-height:3.0em; white-space:normal;  word-wrap: break-word; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; word-break: break-all;}
  .ellipsis.line-clamp-3 {line-height:1.5; max-height:4.5em; white-space:normal;  word-wrap: break-word; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; word-break: break-all;}

  /* display */
  .dp-flex { display:flex; display: -ms-flexbox; display: -webkit-flex ; align-items: center; align-content: center;}
  .dp-inflex {display: inline-flex;}
  .dp-block { display:block;}
  .dp-inline { display:inline;}
  .dp-inblock { display:inline-block;}
  .dp-table { display:table;}

  /* align */
  .align-left {text-align:left !important;}
  .align-right {text-align:right !important;}
  .align-center {text-align:center !important;}

  .vertical-top {vertical-align: top !important; align-items: flex-start !important;}
  .vertical-middle {vertical-align: middle !important; align-items: center !important;}
  .vertical-bottom {vertical-align: bottom !important; align-items: flex-end !important;}

  /* padding */
  .p-all-10 {padding:10px !important;}
  .p-all-20 {padding:20px !important;}
  .p-all-30 {padding:30px !important;}

  /* margin */
  .mr-auto {margin-right:auto;}
  .ml-auto {margin-left:auto;}

  .mt-5 {margin-top:5px;}
  .mt-10 {margin-top:10px;}
  .mt-20 {margin-top:20px;}
  .mt-30 {margin-top:30px;}
  .mt-40 {margin-top:40px;}

  .mr-5 {margin-right:5px;}
  .mr-10 {margin-right:10px;}
  .mr-15 {margin-right:15px;}
  .mr-20 {margin-right:20px;}

  .ml-5 {margin-left:5px;}
  .ml-10 {margin-left:10px;}
  .ml-20 {margin-left:20px;}

  .mb-5 {margin-bottom:5px;}
  .mb-10 {margin-bottom:10px;}
  .mb-20 {margin-bottom:20px;}
  .mb-30 {margin-bottom:30px;}

  /* space */
  .space-10 {margin-bottom:10px;}
  .space-15 {margin-bottom:15px;}
  .space-20 {margin-bottom:20px;}
  .space-30 {margin-bottom:30px;}
  .space-40 {margin-bottom:40px;}
  .space-60 {margin-bottom:60px;}
  .space-80 {margin-bottom:80px;}
  .space-100 {margin-bottom:100px;}

  /* width */
  .w-100 {width:100% !important;}

  /* flex */
  .flex-1 {flex:1;}

  /* no- */
  .no-margin { margin:0px !important;}
  .no-padding { padding:0px !important;}
  .no-padding-top {padding-top:0px !important;}
  .no-border { border:none !important;}

  /* grid */
  .row {display: flex; flex-wrap:wrap; margin-right:-15px; margin-left:-15px;}
  [class*="col-"] {position: relative; min-height:1px; float:left; padding-right:15px; padding-left:15px;}

  .col {
    -ms-flex-preferred-size: 0;
    flex-basis: 0;
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    max-width: 100%; }

  .col-auto {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    width: auto;
    max-width: 100%; }

  .col-1 {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 8.33333%;
    flex: 0 0 8.33333%;
    max-width: 8.33333%; }

  .col-2 {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 16.66667%;
    flex: 0 0 16.66667%;
    max-width: 16.66667%; }

  .col-3 {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 25%;
    flex: 0 0 25%;
    max-width: 25%; }

  .col-4 {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 33.33333%;
    flex: 0 0 33.33333%;
    max-width: 33.33333%; }

  .col-5 {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 41.66667%;
    flex: 0 0 41.66667%;
    max-width: 41.66667%; }

  .col-6 {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 50%;
    flex: 0 0 50%;
    max-width: 50%; }

  .col-7 {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 58.33333%;
    flex: 0 0 58.33333%;
    max-width: 58.33333%; }

  .col-8 {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 66.66667%;
    flex: 0 0 66.66667%;
    max-width: 66.66667%; }

  .col-9 {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 75%;
    flex: 0 0 75%;
    max-width: 75%; }

  .col-10 {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 83.33333%;
    flex: 0 0 83.33333%;
    max-width: 83.33333%; }

  .col-11 {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 91.66667%;
    flex: 0 0 91.66667%;
    max-width: 91.66667%; }

  .col-12 {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%; }

  /* ========= ui - form ========= */
  .field {margin:0 0 1em;}
  .fm-group {display: flex;}
  .fm-group li {margin-right:10px;}
  .fm-group li:last-child {margin-right:0;}
  .fm-group.equal {width:100%; flex-wrap: wrap;}
  .fm-group.equal li {flex:1; overflow: hidden;}

  .fm-group .btn.big {min-width:auto; padding:0 15px;}
  .fm-label {display: block; margin-bottom:10px; font-weight:500;}
  .fm-control {margin:0; outline:0; background:#fff; border:1px solid #E8E8E8; border-radius:2px; transition:0.2s;}
  /* .fm-control {-webkit-appearance: none;} */
  .fm-control {height:36px; padding:8px 6px;}
  .fm-control.round {border-radius:100px;}
  .fm-control.selected {border-color:#3182f6; background:#edf4ff;}

  /* ========= ui - radio ========= */
  .radio {cursor: pointer;}
  .radio .radio-link-block {min-width:80px; height:36px; border:1px solid #ccc; border-radius:2px; display: flex; align-items: center; align-content: center; justify-content: center; font-size:14px; cursor: pointer; overflow: hidden;}
  .radio:hover .radio-link-block {border-color:#85818D;}
  .radio input[type="radio"] {position:absolute; opacity:0;}
  .radio input[type=radio]:checked ~ .radio-link-block {background:#fff; border-color:#3182f6; color:#3182f6;}

  .radio .mark {position: relative; display: inline-block; top: 2px;left: 0;height: 18px;width: 18px;background: #fff;border-radius: 100px; border:1px solid #bbb;}
  .radio .mark:after {content: ""; position: absolute; display: none;}
  .radio:hover input ~ .mark {border-color:#85818D; transition: 0.2s;}
  .radio input:checked ~ .mark {background: #fff; border-color:#3182f6;}
  .radio input:checked ~ .mark:after {content: ''; display: block; left: 3px; top: 3px; width: 10px; height: 10px; background: #3182f6; border-radius:100px;} 

  .radio[aria-disabled],
  .radio[aria-disabled=true] {user-select: none; -webkit-appearance: none; pointer-events: none; color:#999;}
  .radio[aria-disabled] .mark,
  .radio[aria-disabled=true] .mark {background:#f5f7f9;}
  .radio[aria-disabled] .radio-link-block,
  .radio[aria-disabled=true] .radio-link-block {background: #f5f7f9;}


  /* ========= ui - checkbox ========= */
  .checkbox {cursor: pointer;}
  .checkbox .checkbox-link-block {min-width:80px; height:36px; border:1px solid #ccc; border-radius:2px; display: flex; align-items: center; align-content: center; justify-content: center; font-size:14px; cursor: pointer; overflow: hidden;}
  .checkbox:hover .checkbox-link-block {border-color:#85818D;}
  .checkbox input[type="checkbox"] {position:absolute; opacity:0;}
  .checkbox input[type=checkbox]:checked ~ .checkbox-link-block {background:#fff; border-color:#3182f6; color:#3182f6;}

  .checkbox .mark {position: relative; display: inline-block; top: 2px;left: 0;height: 18px;width: 18px;background: #fff;border-radius: 4px; border:1px solid #bbb;}
  .checkbox .mark:after {content: ""; position: absolute; display: none;}
  .checkbox .mark:after {left: 5px; top: 1px; width: 7px; height: 11px; border: solid #3182f6;border-width: 0 2px 2px 0;-webkit-transform: rotate(45deg);-ms-transform: rotate(45deg);transform: rotate(45deg);}
  .checkbox:hover input ~ .mark {border-color:#85818D; transition: 0.2s;}
  .checkbox input:checked ~ .mark {background: #fff; border-color:#bbb;}
  .checkbox input:checked ~ .mark:after {display: block;}

  /* ========= ui - fileUpload ========= */
  .filebox {border:1px solid #ddd;}
  .filebox input[type=file] {width:100%;}
  .filebox input[type=file]::file-selector-button {border:none; margin-right:15px; padding: 8px 6px; min-width:90px; height: 36px; background: #e0ecff; color:#1b64da; font-weight:600; transition: 0.1s;}
  .filebox input[type=file]::file-selector-button:hover {background: #ccdfff;}

  /* multiple */
  .filebox-multiple {display: block; width:100%;} 
  .filebox-multiple input[type="file"] {display: none;}
  .filebox-multiple .file-upload {min-height:100px; border:1px solid #ddd; border-radius:4px;}
      .filebox-multiple .file-upload .upload {display: flex; flex-direction: column; justify-content: center; min-height:100px; color:#999; border-radius:4px; transition: 0.2s; text-align:center;}
      .filebox-multiple .file-upload .upload:hover {cursor:pointer; color: #666; background:#f9f9f9; border-color:#999;}
      .filebox-multiple .file-upload .upload .text i {font-size:30px;}

  .filebox-multiple .file-list li {margin:10px;}
  .filebox-multiple .file-list .item {display: flex; align-items: center; align-content: center; justify-content: space-between; padding-left:12px; font-size:13px; background:#EFF5FF; color:#0046AF;}
  .filebox-multiple .file-list .item .left {display: flex;}
  .filebox-multiple .file-list .item .left .file-size {color:#777; margin-left:10px; font-size:12px;}

  /* ========= ui - button ========= */
  .btn-wrap button, .btn-wrap a {margin-left:4px;}
  .btn-wrap button:first-child, .btn-wrap a:first-child {margin-left:0;}

  .btn {display: inline-flex; justify-content: center; align-items: center; font-weight: 400; font-stretch: normal; font-style: normal; letter-spacing: normal; cursor: pointer; border-radius: 2px; transition: 0.2s;}
  .btn-solid {color:#fff; background:#642977; background-image: linear-gradient(to right, #642977, #5129CF);}
  .btn-outline {color:#5a5a5a; background:#fff; border:1px solid #a5a5a5;}

  .btn-solid:hover {background:#642977;  background-image: linear-gradient(to right, #311440, #291463); transition: 0.2s;}
  .btn-outline:hover {background:#fff; border-color: #666;}

  .btn {height:36px; min-width:70px; font-size:14px; padding:0 20px; padding-bottom: 2px;}
  .btn.small {height: 32px; min-width: 50px; font-size: 14px; padding:0 15px; padding-bottom: 2px;}
  .btn.medium {height: 40px; min-width: 100px; font-size: 14px; padding:0 20px; padding-bottom: 2px;}
  .btn.large {height: 40px; min-width: 140px; font-size: 14px; padding:0 20px; padding-bottom: 2px;}
  .btn.big {height: 60px; min-width: 180px; font-size: 16px; padding:0 20px; padding-bottom: 2px;}

  .btn.icon {min-width:auto; padding:0 1em;}
  .btn.round {border-radius:100px;}

  /* ========= ui - table ========= */
  .tbl {border-collapse:collapse; border-spacing:0;}
  .tbl th, .tbl td {padding:8px 8px; vertical-align: middle; word-break: break-all;}
  .tbl th {font-weight: 500; text-align: left;}

  .tbl-basic th {background:#f7f8fa;}
  .tbl-basic th, .tbl-basic td {border:1px solid #eaeaea;}

  .tbl.black {border-top:0.1em solid #000;}

  #tblBackground {width: 100%; table-layout: fixed;}
      #divHeadScroll {width: 100%; overflow-x: hidden; overflow-y: hidden; padding-right:8px;}
          #tblHead  {width: calc(100vw - 334px); min-width:100%; table-layout: fixed;}
      #divBodyScroll {width: 100%; height: 400px; overflow-x: scroll; overflow-y: scroll;}
          #tblBody {width: calc(100vw - 334px); min-width:100%; table-layout: fixed;}

  /* ========= ui - message ========= */
  .msg-wrap {display: flex; align-items: center; align-content: center; width:100%; padding:10px 10px; border-radius:4px;}
  .msg-wrap .icon {display: flex; margin-right:10px;}

  /* msg-type */
  .msg-wrap.secondary {background:#f0f1f3; color:#45494D;}
  .msg-wrap.info {background:#CCE4FD; color:#0D4787;}
  .msg-wrap.success {background:#c9f8d4; color:#006319;}

  /* ========= ui - bullet ========= */
  li.bullet {position: relative; padding-left:10px;}
  li.bullet::before {position: absolute; left:2px; top:10px; width:3px; height:3px; background: #333; content:'';}

  /* ========= ui - divide ========= */
  .divide {display: block; height:1px; background:#dadada; margin:30px 0;}
  .divider {display: inline-block; height:0.8em; width:1px; background:#ccc; vertical-align: bottom; margin:0 6px;}

  /* ========= ui - infobox ========= */
  .info-box {border:1px solid #dadada;}
  .info-box dt {padding:12px 20px; border-bottom:1px dashed #ccc;}
  .info-box dd {display: block; padding: 16px 20px; background:#fafafa;}
  .info-box dd li {margin-top:10px;}
  .info-box dd li:first-child {margin-top:0;}

  /* ========= ui - modal ========= */
  .modal {position:fixed; left:0; top:0; width:100%; height:100%; background-color:rgb(0,0,0); background-color:rgba(9, 5, 26, 0.3); z-index:99999;}

  .modal-flex { display:flex; display: -ms-flexbox; display: -webkit-flex; height:100vh; justify-content: center; align-items: center; }
  .modal-flex-inner { background:#fff; border-radius: 10px; min-width:400px; max-width:90%; max-height:90vh; overflow:auto; display: flex; flex-direction: column; justify-content: flex-start;}
  .modal-flex-inner .modal-header {background:#fff;}
  .modal-flex-inner .modal-header .title {margin:0; padding:0; font-size:1.2rem; padding:20px 10px 10px 20px; min-height: 40px;}
  .modal-flex-inner .modal-header a {display: inline-block; padding:10px;}
  .modal-flex-inner .modal-header .ml-auto {padding:10px;}
  .modal-flex-inner .modal-content {overflow: auto; padding:20px; }
  .modal-flex-inner .modal-footer {padding:20px 20px 40px 20px;}

  /* ========= ui - tab ========= */
  .tabs .tab-menu-wrap {border-bottom:1px solid #ddd;}
  .tabs .tab-menu {display: inline-block; padding:10px 0; margin-right:25px; text-align: center; position: relative; cursor: pointer;}
  .tabs .active {cursor: default; background:#fff; border-bottom:4px solid #3182f6;}
  .tabs .hide {display: none;}
  .tabs .show {display: block;}

  .ui-tabs .ui-tab-menu-wrap {border-bottom:1px solid #ddd;}
  .ui-tabs .ui-tab-menu {display: inline-block; padding:10px 0; margin-right:25px; text-align: center; position: relative; cursor: pointer;}
  .ui-tabs .ui-tab-menu.active {cursor: default; background:#fff; border-bottom:4px solid #3182f6;}
  .ui-tab-content {display: none;}

  /* ========= ui - treeview ========= */
  .tree-view .mn-item {padding-left:1.5rem; overflow-x:hidden; position: relative;}
  .tree-view .mn-item .mn-link {display:flex; align-items:center; justify-content: space-between; padding-left:100%; margin-left:-100%; padding-right:100%; margin-right:-100%; padding-top:9px; padding-bottom:10px; border-radius:4px; transition: 0.1s;}
  .tree-view .mn-item .mn-link:hover {cursor:pointer; background:#edeef3;}
  .tree-view .mn-item .mn-link:active {cursor:pointer; background:#e5e6ec;}
  .tree-view .mn-item .mn-link .mn-icon, .mn-icon {margin-right:10px;}
  .tree-view .mn-item .mn-link .mn-name, .mn-name {flex:auto; word-break: break-all;}
  .tree-view .mn-item .mn-link .mn-collapse {margin:0 6px; font-size:10px; transition: 0.5s;}
  .tree-view .nested > .mn-item > .mn-link:before {content:''; width:2px; height:100%; background:#E4E5EA; border-radius:15px; position: absolute; left:6px; top:0;}

  .tree-view .open .mn-collapse {-webkit-transform: rotate(90deg); transform: rotate(90deg);}
  .tree-view .selected, .tree-view .mn-item .mn-link.selected:hover {background:#e0ecff; color:#1b64da; font-weight:500;}
  .tree-view .selected a {color:#A020AB;}
  .tree-view .nested > .mn-item > .mn-link.selected:before {background:#E4DEEE;}
  .tree-view .nested {max-height:0; overflow: hidden;} 
  .tree-view .active {display:block; max-height:100vh; transition:1.8s;}

  /* ========= ui - search ========= */
  .search-wrap {position: relative; display: inline-block;}
  .search-wrap input {height:46px; font-size:16px; border-radius:100px; padding-left:30px; padding-right:50px;}
  .search-wrap input::placeholder {font-size:16px; font-weight: 600; color:#95928E;}
  .search-wrap button {display: block; position: absolute; font-size:20px; top:6px; right:0px; color:#95928E;}

  .search-wrap.medium input {height:36px; font-size:14px; padding-left:15px;}
  .search-wrap.medium input::placeholder {font-size:14px;}
  .search-wrap.medium button {font-size:14px; top:0;}

  /* ========= ui - switch ========= */
  .switch {position: relative;display: inline-block;width: 50px;height: 26px;}
  .switch input { opacity: 0;width: 0;height: 0;}
  .slider {position: absolute;cursor: pointer;top: 0;left: 0;right: 0;bottom: 0;background-color: #ccc;-webkit-transition: .4s;transition: .4s;border-radius: 26px;}
  .slider:before {position: absolute;content: "";height: 18px;width: 18px;left: 4px;bottom: 4px;background-color: white;-webkit-transition: .4s;transition: .4s;border-radius: 50%;}
  input:checked + .slider {background-color: #3182f6;}
  input:focus + .slider {box-shadow: 0 0 1px #3182f6;}
  input:checked + .slider:before {-webkit-transform: translateX(24px);-ms-transform: translateX(24px);transform: translateX(24px);}

  /* ========= ui - pagination ========= */
  .pagination-wrap {display: flex; padding-top:15px;}
  .pagination-wrap .form-control {margin-right:auto;}
  .pagination {display: flex; align-items: center; align-content: center; border:1px solid #eaeaea; border-radius: 4px; overflow: hidden; margin-left:auto;}
  .pagination .page-link {display: inline-flex; align-items: center; align-content: center; justify-content: center; font-size:12px; width:34px; height:36px; text-align:center; border-right:1px solid #eaeaea; background:#fff; transition: 0.05s; user-select: none;}
      .pagination .page-link:hover {background:#f3f3f3;}
      .pagination .page-link.active {background:rgb(244, 245, 255); color:#3182f6; font-weight:bold;}
      .pagination li:last-child .page-link {border-right:none;}

  /* leftmenu */
  #leftmenu .tree-view .mn-item .mn-link {padding-top:15px; padding-bottom:16px;}
  /* user profile */
  #gnbMyProfile .tree-view .mn-item .mn-link {padding-top:12px; padding-bottom:13px;}

  /* ========= ui - breadcrumb ========= */
  .breadcrumb {display: flex; align-items: center; margin-bottom:8px; margin-left:-4px; min-height:25px;}
  .breadcrumb .item {display: inline-block; padding:4px 6px; color:#6b778c; font-weight:300; font-size:13px; letter-spacing: 0.2px; transition: 0.2s;}
  .breadcrumb .item:hover {background:#f3f3f3; border-radius:4px;}
  .breadcrumb .item:active {background:#EBEBEB;}
  .breadcrumb .item:last-child:after {display: none;}
  .breadcrumb .bc-divider {color:#ddd;}
`;
