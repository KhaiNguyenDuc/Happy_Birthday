// 霸都丶傲天 2019年10月10日 https://github.com/AJLoveChina/birthday
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "Hé lô",
        "Xin chào một ngày đặc biệt",
        "Với cái tuổi thật đẹp này",
        "Chúc bạn tôi dồi dào sức khỏe",
        "Thành công luôn đến",
        "Nhan sắc thì ai cũng phải ngắm nhìn",
        "Thổi nến và cầu nguyện ngay để ước mơ của bạn thật nhiệm màu nào",
        "Happy birthday",
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        "Xin chào một ngày đặc biệt": "./imgs/xiaokeai.png",
        "Chúc bạn tôi dồi dào sức khỏe": "./imgs/1.png",
        "Thành công luôn đến": "./imgs/2.png",
        "Nhan sắc thì ai cũng phải ngắm nhìn": "./imgs/3.png"
        // "今天是你的生日": "./imgs/birthday.jpg",
    },
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "Cứ bấm vào chỗ này nha ( rồi đợi xíu nha )",
        play: "Bật nhạc",
        bannar_coming: "Có chuối nè",
        balloons_flying: "Bóng nè",
        cake_fadein: "Bánh kem nè",
        light_candle: "Thắp nến",
        wish_message: "Hết biết nói gì rồi",
        story: "Bấm vô tiếp đi",
    }
};
