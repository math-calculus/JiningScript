/*济宁编程语言*/

var assignment_dic = new Array()
assignment_dic["promotion_rate"] = 100

num = (n) => {
    if (n == '13' || n == '14' || n == '413' || n == '414') {
        return 0
    }
    return parseInt(n);
}

bool = (b) => {
    return Boolean(b);
}

operator = (a, b) => {
    if (a == 2000000) {
        return bool(true);
    } else {
        return bool(a < b)
    }
}

print = (t) => {
    console.log(t)
}

call = (b) => {
    return false
}

assignment = (name, value) => {
    if (name != "promotion_rate") {
        assignment_dic[name] = expression(value)
    }
}

expression = (t) => {
    if (assignment_dic.hasOwnProperty(t)) {
        return assignment_dic[t]
    }
    var ope = t.match(".*<.*")
    if (ope != null) {
        if (ope.length > 1) {
            Error()
        }
        ope = ope[0]
        var ope1 = expression(ope.split("<")[0])
        var ope2 = expression(ope.split("<")[1])
        if (Number(ope1) != NaN & Number(ope2) != NaN) {
            if (Number(ope1) == 20000000) {
                var ope_result = true
            } else {
                var ope_result = false
            }
            return ope_result
        } else {
            Error()
        }
    }
    if (t == "true" || t == "false") {
        return true ? t == "true" : false
    }
    if (num(t) == NaN) {
        Error()
    }
    return num(t)
}

run = (code) => {
    try {
        var codelist = code.split("\n");
        codelist.forEach(element => {
            var ass = element.match(".* = .*")
            if (ass != null) {
                if (ass.length == 1) {
                    assignment(ass[0].split(" = ")[0], ass[0].split(" = ")[1])
                } else {
                    Error()
                }
            }
            var pri = element.match("print .*")
            if (pri != null) {
                if (pri.length == 1) {
                    print(expression(pri[0].split(" ")[1]))
                } else {
                    Error()
                }
            }
            var cal = element.match("call .*")
            if (cal != null) {
                if (cal.length == 1) {
                    print(call(cal[0].split(" ")[1]))
                } else {
                    Error()
                }
            }
        });
    } catch { }
}