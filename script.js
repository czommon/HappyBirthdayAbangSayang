let opened = false;

function showLetter() {
  if (!opened) {
    document.getElementById('popupTitle').textContent = "happy birthday abaang!";
    document.getElementById('popupText').innerHTML =
      "hi, abang Putra :3,<br><br>hari ini aku cuma mau bilang makasih. makasih karena udah bertahan sampai sejauh ini, sampai ada di titik ini, sampai bisa ngelewatin semua hari baik dan hari yang mungkin gak gampang buat dijalani.<br><br>aku tahu gak semua hal selalu berjalan sesuai yang diharapkan, ada capek, ada kecewa, ada banyak hal yang mungkin cuma abang yang tahu rasanya. tapi lihat deh, sekarang abang ada di sini. you made it this far, and i'm really proud of you.<br><br>aku harap di umur yang baru ini, abang gak terlalu keras sama diri sendiri. gak harus selalu kuat, gak harus selalu punya semua jawaban. it's okay to rest, it's okay to take your time. aku cuma pengen abang tahu kalau semua usaha kecil yang udah abang lakuin selama ini itu berharga, dan semuanya gak pernah sia-sia.<br><br>thank you for being you. thank you for all the kindness, patience, and love that you give, not only to me but also to people around you. mungkin kadang abang gak sadar seberapa berarti keberadaan abang buat orang lain, tapi percaya deh, you are loved more than you think.<br><br>semoga tahun ini lebih baik ke abang. semoga banyak hal baik yang datang, banyak doa yang menemukan jalannya untuk terkabul, dan banyak alasan baru buat tersenyum. kalau ada hari yang berat nanti, semoga abang selalu ingat kalau abang gak harus jalan sendiri.<br><br>and no matter what happens, i hope you never stop believing that you deserve good things too.<br><br>happy Birthday, abang. thank you for surviving, thank you for staying, and thank you for letting me be part of your journey. i'm so happy you're here.<br><br>i love you, and i'm rooting for you, always.<br>Kiano";
    document.getElementById('popupText').classList.add('letter-text');
    document.getElementById('popupBtn').textContent = "i love you most, abang sayang";
    document.getElementById('popupBtn').setAttribute('onclick', 'closePopup()');
    opened = true;
  }
}

function closePopup() {
  document.querySelector('.overlay').style.display = 'none';
}

document.getElementById("popupBtn").addEventListener("click", showLetter);