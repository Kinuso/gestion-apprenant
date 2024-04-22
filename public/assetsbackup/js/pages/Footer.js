const Footer = () => {
  return `<footer>
    <div>Tous droits réservés</div>
</footer>
<script src=" <?= HOME_URL ?>Public/assets/script.js"></script>
<script>
    const HOME_URL = "<?= HOME_URL ?>"
</script>
</body>



</html>`;
};

export default Footer;
