import "./DecorativeFrame.css";

export default function DecorativeFrame() {
  return (
    <div className="decorative-frame" aria-hidden="true">
      <span className="frame-corner frame-top-left" />
      <span className="frame-corner frame-top-right" />
      <span className="frame-corner frame-bottom-left" />
      <span className="frame-corner frame-bottom-right" />

      <span className="frame-line frame-line-top" />
      <span className="frame-line frame-line-bottom" />
      <span className="frame-line frame-line-left" />
      <span className="frame-line frame-line-right" />
    </div>
  );
}