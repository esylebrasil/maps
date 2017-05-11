function visitSeattle () {
  $('#mapOutput').attr('src', $(this).find(":selected").attr("data-src"));
  $('#locationName').text($('#selectInput').val());
}

$('document').ready(visitSeattle);
$('form').change(visitSeattle);