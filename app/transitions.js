export default function() {
  this.transition(
    this.toValue(true),
    this.use('crossFade')
  );
}
