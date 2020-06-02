module.exports = {
  header: {
    'broker': '当前服务',
    'group': '群组',
    'lang': '中文',
    'version': '版本',
    'lastCommit': '最后提交时间',
    'weEventVersion': 'WeEvent 版本号',
    'serverSetting': '服务设置',
    'userSetting': '用户设置',
    'login': '请登录',
    'loginOut': '退出'
  },
  common: {
    'back': '返回',
    'edit': '编辑',
    'delete': '删除',
    'action': '操作',
    'ok': '确定',
    'cancel': '取消',
    'name': '名称',
    'yes': '是',
    'no': '否',
    'addSuccess': '新增成功',
    'addFail': '新增失败',
    'editSuccess': '编辑成功',
    'editFail': '编辑失败',
    'deleteSuccess': '删除成功',
    'deleteFail': '删除失败',
    'isDelete': '确认删除？',
    'loading': '数据加载中...',
    'add': '新增',
    'search': '搜索',
    'detail': '备注',
    'choose': '请选择',
    'operFail': '操作失败',
    'examples': '例如: ',
    'noData': '暂无数据',
    'enter': '请填写',
    'reqException': '数据请求异常',
    'timeOut': '请求超时，请稍后重试',
    'all': '全选',
    'noServer': '检测到您还未添加任何服务,请先添加相关服务'
  },
  serverSet: {
    'serverMana': '服务管理',
    'serverName': '服务名称',
    'addServer': '新增服务',
    'editServer': '编辑服务信息',
    'brokerURLAddress': 'Broker 地址',
    'webaseURLAddress': 'WeBASE 地址',
    'authorized': '授权用户',
    'ruleEngine': '配置规则引擎',
    'namePlaceholder': '请输入服务名称(1-20位字母数字下划线)',
    'borkerPlaceholder': '例如: "http://127.0.0.1:8080/weevent-broker"',
    'webasePlaceholder': '例如: "http://127.0.0.1:8080/webase"',
    'authorizedPlaceholder': '请选择用户',
    'errorServer': '服务名格式错误',
    'noServerName': '服务名不能为空',
    'emptyAddress': '请填写服务地址',
    'errorAddress': '服务地址错误,无法连接',
    'exitBrokerURL': 'Broker服务已存在, 请向所属用户申请访问授权'
  },
  userSet: {
    'userName': '用户名',
    'passWord': '密码',
    'enterUserName': '请输入用户名',
    'quickRegistered': '快速注册',
    'confirmPassWord': '确认密码',
    'newPassWord': '新密码',
    'oldPassWord': '旧密码',
    'enterPassWord': '请输入密码',
    'enterAgain': '再次输入',
    'modify': '修改',
    'hasAccount': '已有帐号，登录',
    'registered': '注册',
    'regSuccess': '注册成功',
    'regFail': '注册失败',
    'emptyUserName': '用户名不能为空',
    'errorUserName': '用户名只能是6~20位的字母和数字',
    'exitUserName': '用户名已存在',
    'enterPassWordAgain': '请再次输入密码',
    'passWordInconsistent': '两次输入密码不一致',
    'errorOldPassWord': '旧密码输入错误',
    'passWordModifySuccess': '密码修改成功',
    'mail': '邮箱',
    'emptyEail': '邮箱不能为空',
    'errorEail': '邮箱格式错误',
    'loginFail': '登录失败',
    'errorLogin': '用户名或密码错误，请重新输入',
    'forgetPassWord': '忘记密码？',
    'login': '登录',
    'resetPassWord': '重置密码',
    'mailWarning': '请注意，重置密码的链接将会发送到帐号绑定的邮箱',
    'noUser': '用户名不存在',
    'sendMailFail': '发送邮件失败',
    'sendMailSuccess': '邮件已发送至绑定邮箱'
  },
  sideBar: {
    'blockChainInfor': '区块链信息',
    'overview': '数据概览',
    'transaction': '交易详情',
    'transactionDetial': '交易列表',
    'nodeList': '节点列表',
    'topic': '主题管理',
    'topicList': '主题列表',
    'statistics': '事件统计',
    'subcription': '订阅列表',
    'engine': '规则引擎',
    'ruleMana': '规则管理',
    'ruleDetail': '规则详情',
    'sources': '数据源设置',
    'timerSchedule': '任务列表',
    'fileTranspoart': '文件上传'
  },
  overview: {
    'nodeNum': '节点数量',
    'blockNum': '区块数量',
    'transactionNum': '交易数量',
    'lastWeek': '历史发布事件数',
    'essential': '关键监控指标'
  },
  tableCont: {
    'blockNumber': '块高',
    'transCount': '交易',
    'timestamp': '创建时间',
    'pkHash': '区块哈希',
    'transDetial': '查看交易',
    'copySuccess': '复制成功',
    'transHash': '交易哈希',
    'nodeName': '节点',
    'state': '状态',
    'run': '运行',
    'stop': '停止',
    'getDataError': '数据请求出错',
    'searchTopic': '请输入topic',
    'exitTopic': 'Topic已存在',
    'sequenceNumber': '已发布事件数',
    'newBlockNumber': '最新事件块高',
    'address': 'Topic合约地址',
    'creater': '创建人',
    'addTopic': '新增 Topic',
    'noName': '名称不能为空',
    'noMore': '名称长度不能超过64个字符',
    'errorTopicName': 'topic名称格式错误',
    'chooseTopic': '选择主题',
    'chooseTime': '选择时间',
    'beginTime': '开始日期',
    'endTime': '结束日期',
    'machine': 'Broker 服务',
    'subscribeId': '订阅ID',
    'remoteIp': '订阅来源IP',
    'interfaceType': '订阅方式',
    'notifiedEventCount': '已通知事件',
    'notifyingEventCount': '待通知事件',
    'createTimeStamp': '订阅时间',
    'nodeType': '节点类型',
    'sealer': '共识节点',
    'observer': '观察节点',
    'lastTimestamp': '最新事件发布时间'
  },
  rule: {
    'dataGuide': '新手引导',
    'useText': '使用文档',
    'creatNewRule': '新建规则',
    'creatRule': '创建规则',
    'editRule': '编辑规则',
    'addOperation': '添加操作',
    'checkRule': '验证规则',
    'startRule': '启动规则',
    'ruleList': '规则列表',
    'creatNow': '立即创建',
    'enterRuleName': '请输入规则名称',
    'ruleName': '规则名称',
    'payloadType': '规则格式',
    'payloadMap': '内容',
    'ruleDescription': '描述',
    'run': '运行中',
    'notRun': '未启动',
    'start': '启动',
    'stop': '停止',
    'read': '查看',
    'delete': '删除',
    'creatRuleRemark': '数据流转类型的规则可以对设备上报的数据进行简单处理，并将处理后的数据流转到其他Topic，支持JSON数据格式',
    'dataType': '数据格式',
    'enterPayload': '请填写规则的主要内容',
    'commit': '提交',
    'errorType': '格式错误',
    'isStart': '已启动',
    'startFail': '启动失败',
    'isStop': '已停止',
    'isDelete': '确认删除？',
    'deleteRule': '删除规则',
    'hasDelete': '已删除',
    'creatSuccess': '创建成功',
    'creatFail': '创建失败',
    'ruleDataBaseId': '数据源地址',
    'addAddress': '新增地址',
    'addJDBCAddress': '新增数据源',
    'editJDBCAddress': '编辑数据源',
    'JDBCinfor': '数据源信息',
    'enterDB': '请填写DB地址',
    'JDBCname': '数据源名称',
    'JDBCIP': '数据源IP',
    'JDBCport': '数据源端口',
    'JDBCDatabaseName': '库',
    'JDBCdatabaseUrl': '数据库链接',
    'JDBCusername': '用户名',
    'JDBCpassword': '密码',
    'tableName': '表名',
    'errorTable': '无法在选中的数据源中连接到此表格',
    'inputTableName': '请填写选择的数据库中对应的表格名称',
    'optionalParameter': '可选参数',
    'enterJDBCname': '请填写数据源名称',
    'enterJDBCIP': '请填写数据源IP',
    'enterJDBCport': '请填写数据源端口',
    'enterJDBCDatabaseName': '请填写数据源库名',
    'enterJDBCDatabaseUrl': '请填写数据源链接',
    'enterJDBCusername': '请填写数据源用户名',
    'enterJDBCpassword': '请填写数据源密码',
    'enterTableName': '请填写表名',
    'enditAddress': '修改地址',
    'deleteAddress': '删除该地址？',
    'checkJDBC': '数据源检验',
    'connectSuccess': '数据源地址连接成功',
    'connectFailed': '数据源地址连接失败',
    'databaseType': '数据源类型',
    'connectTimeOut': '请检查数据源配置是否正确',
    'errorPayLoad': '请勿删除已使用的元素或修改其属性'
  },
  ruleDetail: {
    'guideDetail': '数据详情',
    'ruleInfo': '规则信息',
    'editRule': '编辑规则',
    'processData': '规则详情',
    'sqlDescription': '规则语法说明',
    'ruleDetail': '规则详情',
    'noRule': '您还没有编写规则语句处理数据，',
    'ruleSearchLetter': '规则查询语句',
    'ruleSearchWarning': '选择下方选项后，语句将自动生成',
    'letter': '提取字段',
    'dataCirculat': '数据来源',
    'abnormalData': '异常流转',
    'condition': '过滤条件',
    'nocondition': '请设置过滤条件',
    'completeLetter': '请填写完整语句',
    'forwardData': '转发数据',
    'forwardOption': '转发操作',
    'dataDestination': '数据目的地',
    'selectOperation': '数据目的',
    'selectGuide': '请选择数据流转方式',
    'toTopic': '发布到一个Topic',
    'toDB': '发布到一个DB',
    'errorTopic': '请选择 Topic',
    'db': '数据库',
    'selectDB': '请选择数据库',
    'guideURL': '还未配置数据流转路径，',
    'setGuide': '前往配置',
    'guideAddress': '数据流转地址必须填写',
    'abnormalAddress': '异常流转地址必须填写',
    'cannotSame': '[数据目的]不能和[数据来源]相同'
  },
  ruleStatic: {
    'readRule': '查看规则',
    'readInsideRule': '查看系统规则',
    'systemRules': '系统规则',
    'ruleName': '规则名称',
    'hitTimes': '命中次数',
    'notHitTimes': '未命中次数',
    'successTimes': '发布成功次数',
    'failTimes': '发布失败次数',
    'startTime': '启动时间',
    'readFailRecord': '最后错误详情',
    'lastRecord': '最后一次失败记录',
    'runningStatus': '运行状态',
    'destinationType': '流转目标类型'
  },
  ruleCheck: {
    'inputRule': '请填写完整的条件语句',
    'notNumber': '填写的数据不是数字类型',
    'inputInteger': '方法异常，请填写整数类型',
    'bigger': '输入值请大于0',
    'inputString': '填写的数据类型错误-字符串类型请用双引号包裹',
    'errorOperator': '关系符错误',
    'errorParameter': '该函数的参数错误',
    'errorIndex': '该函数的下标不是整数类型',
    'typeErrorString': '填写的内容与选择的元素类型不匹配，该元素定义的类型是 String',
    'typeErrorNumber': '填写的内容与选择的元素类型不匹配，该元素定义的类型是 Number',
    'typeTimeError': '运用此方法,选取的元素其定义的内容需要为时间类型("hh:mm::ss" 格式)',
    'typeDateError': '运用此方法,选取的元素其定义的内容需要为日期类型("YYYY-MM-DD" 格式)',
    'errorTime': '运用此方法,选取的元素其定义的内容需要为时间类型("YYYY-MM-DD hh:mm::ss" 格式)',
    'columnMarkError': '此方法选择的参数都只能是字符串类型',
    'notAdate': '所选参数的值不是一个有效的日期',
    'notAtime': '所选参数的值不是一个有效的时间'
  },
  timerSchedule: {
    'schedulerName': '任务名称',
    'databaseUrl': '数据源',
    'periodParams': '周期参数',
    'parsingSql': 'SQL文本',
    'addScheduler': '新增任务',
    'editScheduler': '编辑任务',
    'noDbList': '还未配置数据源',
    'enterSN': '请填写任务名',
    'enterPP': '请填写周期参数',
    'enterSQL': '请填写SQl文本',
    'selectDB': '请选择数据源',
    'errorCorn': '参数无效'
  },
  ruleDes: {
    'conditionDes': '过滤条件说明',
    'desTitle': '通过操作页面上的条件栏，用户可以在SQL语句中生成相应的规则触发条件',
    'creatOption': '创建条件语句',
    'creatOptionDes': '单击右侧的“添加”按钮可以生成空白的条件语句列，多次点击可以添加多个条件语句。各条件语句由关系字符 “and” “or”进行拼接',
    'editOption': '编辑条件语句',
    'editOptionDes': '用户可以通过选择Key并设置相应的关系符及值即可生成相应的条件语句，同时还支持内置函数对key进行处理。<br/>例如: abs(age) >= 20',
    'optionMap': '条件语句结构编辑',
    'optionMapDes': '对于复杂的条件语句，该页面现在不仅支持条件语句的水平关联，还支持条件语句的嵌套。单击每个条件栏末尾的“添加”按钮以生成相应的子选项栏, 该选项栏将与其父级形成嵌套关系<br/>例如: (abs(age) >= 20 and name != "Kevin") or age >= 30'
  },
  file: {
    'creatTime': '创建时间',
    'creater': '创建人',
    'roles': '操作角色',
    'options': '操作',
    'sender': '发送方',
    'receiver': '接收方',
    'upload': '上传文件',
    'download': '下载文件',
    'publicKey': '公钥',
    'privateKey': '私钥',
    'isDelete': '删除通道',
    'deleteTopic': '确认删除该通道?',
    'uploadList': '上传列表',
    'noFile': '暂无上传文件',
    'overwrite': '是否覆盖文件?',
    'transpoartList': '通道列表',
    'certified': '已认证',
    'uncertified': '未认证',
    'certification': '认证操作',
    'fileName': '文件名',
    'downloadFile': '下载',
    'downloadList': '下载列表',
    'fileuploadList': '当前传输列表'
  }
}
