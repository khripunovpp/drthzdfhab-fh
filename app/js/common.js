var test = function() {
    var answersWrap = '.b-test__answers',
        answerEl = '.b-test__answer',
        status = 0;



    $(answerEl).on('click', function(event) {
        event.preventDefault();
        if (status === 0) {
            $(this).addClass('selected');
            $(answersWrap).addClass('selected');
            status = 1;
        }
    });

}


$(function() {
    test()
});