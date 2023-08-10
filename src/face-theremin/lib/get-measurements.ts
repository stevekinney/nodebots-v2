import {
  type WithFaceExpressions,
  type WithFaceLandmarks,
  type FaceDetection,
  type FaceLandmarks68,
} from 'face-api.js';

type Face = WithFaceExpressions<
  WithFaceLandmarks<
    {
      detection: FaceDetection;
    },
    FaceLandmarks68
  >
>;

export const getCenterOfFace = (face: Face) => {
  if (!face?.detection?.box) return { x: null, y: null };

  const { width, height, top, left } = face.detection.box;

  const centerX = left + width / 2;
  const centerY = top + height / 2;

  return { x: centerX, y: centerY };
};

export const rankExpressions = (face: Face) => {
  if (!face?.expressions) return 'neutral';
  const expressions = face.expressions.asSortedArray();
  const [first] = expressions;

  return first.expression;
};
