$(function () {
    var t = $(".num1");
    var one = $(".one").val();
    var t2 = $(".num2");
    var one2 = $(".one2").val();
    var n = /^([0-9]+)$/;  //纯数字的正则表达式
    $(document).ready(function() {
        $(".total").html("<a>￥</a>"+(parseInt(t.val()) *one));
        $(".total2").html("<a>￥</a>"+(parseInt(t2.val()) *one2));//toFixed()
        $(".totalall").html("<a>合计：￥</a>"+(parseInt(t.val()) *one + parseInt(t2.val()) *one2));
    })
    $('.num1').blur(function() {     //输入数量检测，不能为空，必须大于0
            var num = t.val();
            if (num < 1 || !n.test(num)) {
                // if (num < 1) {
                t.val(1);
                $(".total").html("<a>￥</a>"+(parseInt(t.val()) *one));
                $(".totalall").html("<a>合计：￥</a>"+(parseInt(t.val()) *one + parseInt(t2.val()) *one2));
                alert('输入不为空且大于0');
                return -1;
            }
        });
    $('.num2').blur(function() {
        var num2 = t2.val();
        if (num2 < 1 || !n.test(num2)) {
            t2.val(1);
            $(".total2").html("<a>￥</a>"+(parseInt(t2.val()) *one2));
            $(".totalall").html("<a>合计：￥</a>"+(parseInt(t.val()) *one + parseInt(t2.val()) *one2));
            alert('输入不为空且大于0');
            return t2.val();
        }
    });
    t.keyup(function() {
            $(".total").html("<a>￥</a>"+(parseInt(t.val()) *one));
            $(".totalall").html("<a>合计：￥</a>"+(parseInt(t.val()) *one + parseInt(t2.val()) *one2));
    });
    t2.keyup(function() {
            $(".total2").html("<a>￥</a>"+(parseInt(t2.val()) *one2));
            $(".totalall").html("<a>合计：￥</a>"+(parseInt(t.val()) *one + parseInt(t2.val()) *one2));

    });


    //数量增加操作
    $(".add").click(function () {
        t.val(parseInt(t.val()) + 1);
        if (parseInt(t.val()) != 1) {
        }
        setTotal();
        setTotal1();
    });
        //数量减少操作
        $(".remove").click(function () {
            if (parseInt(t.val()) > 1) {
                t.val(parseInt(t.val()) - 1);
                setTotal();
                setTotal1();
            }
        });
        $(".add1").click(function () {
        t2.val(parseInt(t2.val()) + 1);
        if (parseInt(t2.val()) != 1) {
        }
        setTotal2();
        setTotal1();
    });
        //数量减少操作
        $(".remove1").click(function () {
            if (parseInt(t2.val()) > 1) {
                t2.val(parseInt(t2.val()) - 1);
                // setTotal();
                setTotal2();
                setTotal1();
            }
        });
        function setTotal() {
            $(".total").html("<a>￥</a>"+(parseInt(t.val()) *one));
        }
        function setTotal2() {
        $(".total2").html("<a>￥</a>"+(parseInt(t2.val()) *one2));
        }
        // setTotal();
        function setTotal1() {
            $(".totalall").html("<a>合计：￥</a>"+(parseInt(t.val()) *one + parseInt(t2.val()) *one2));
        }
});
