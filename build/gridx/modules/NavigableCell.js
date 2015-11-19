//>>built
define("gridx/modules/NavigableCell","dojo/_base/declare dojo/_base/event dojo/_base/sniff dojo/dom-class dojo/keys dijit/a11y ../core/_Module".split(" "),function(p,k,m,h,f,q,n){return n.register(p(n,{name:"navigableCell",preload:function(){this.grid.focus.registerArea({name:"navigablecell",priority:1,scope:this,doFocus:this._doFocus,doBlur:this._doBlur,onFocus:this._onFocus,onBlur:this._onBlur,connects:[this.connect(this.grid,"onCellKeyDown","_onKey")]})},_doFocus:function(b,a){if(this._navigating){var c=
this._navElems,e=function(){var b=0>a?c.highest||c.last:c.lowest||c.first;if(b)try{b.focus()}catch(e){}};m("webkit")?e():setTimeout(e,5);return!0}return!1},_doBlur:function(b,a){if(b){var c=this,e=c.model,g=c.grid,h=g.view,l=g.body,d=c._navElems,f=d.lowest||d.first,d=d.last||d.highest||f;if((m("ie")?b.srcElement:b.target)==(0<a?d:f))k.stop(b),e.when({id:c._focusRowId},function(){function b(d,r){l._nextCell(d,r,f,k).then(function(d){c._focusColId=g._columns[d.c].id;var f=h.getRowInfo({visualIndex:d.r});
c._focusRowId=e.indexToId(f.rowIndex,f.parentId);c._beginNavigate(c._focusRowId,c._focusColId)?(l._focusCellCol=d.c,l._focusCellRow=d.r,c._doFocus(null,a)):b(d.r,d.c)})}var d=h.getRowInfo({parentId:e.treePath(c._focusRowId).pop(),rowIndex:e.idToIndex(c._focusRowId)}).visualIndex,f=0<a?1:-1,k=function(a,b){return c._isNavigable(g._columns[b].id)&&g._columns[b].decorator};b(d,g._columnsById[c._focusColId].index)});return!1}this._navigating=!1;return!0},_isNavigable:function(b){return(b=this.grid._columnsById[b])&&
(b.navigable||void 0===b.navigable)},_beginNavigate:function(b,a){if(this._isNavigable(a)){this._focusColId=a;this._focusRowId=b;var c=this._navElems=q._getTabNavigable(this.grid.body.getCellNode({rowId:b,colId:a}));return this._navigating=(c.highest||c.last)&&(c.lowest||c.first)}return!1},_onBlur:function(){this._navigating=!1;this.grid.edit&&this.grid.edit._applyAll()},_onFocus:function(b){for(var a=b.target,c=this.grid.domNode;a&&a!==c&&!h.contains(a,"gridxCell");)a=a.parentNode;if(a&&a!==c){var c=
a,e=a.getAttribute("colid");for(this.grid.hScroller.scrollToColumn(e);a&&!h.contains(a,"gridxRow");)a=a.parentNode;if(a)return a=a.getAttribute("rowid"),c!=b.target&&this._beginNavigate(a,e)}return!1},_onKey:function(b){var a=this.grid.focus;b.keyCode==f.F2&&!this._navigating&&"body"==a.currentArea()?this._beginNavigate(b.rowId,b.columnId)&&(k.stop(b),a.focusArea("navigablecell")):b.keyCode==f.ESCAPE&&(this._navigating&&"navigablecell"==a.currentArea())&&(this._navigating=!1,a.focusArea("body"))}}))});
//@ sourceMappingURL=NavigableCell.js.map