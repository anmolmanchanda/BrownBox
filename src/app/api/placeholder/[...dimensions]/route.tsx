import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(
  _request: NextRequest,
  props: { params: Promise<{ dimensions: string[] }> }
) {
  const params = await props.params;
  const dimensions = params.dimensions;
  const width = parseInt(dimensions[0]) || 400;
  const height = parseInt(dimensions[1]) || 400;

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
          position: 'relative',
        }}
      >
        <svg
          width={Math.min(width, height) * 0.3}
          height={Math.min(width, height) * 0.3}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ marginBottom: 20, display: 'block' }}
        >
          <path
            d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div style={{ 
          color: 'white', 
          fontSize: Math.min(width, height) * 0.08, 
          fontWeight: 'bold',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          <span>{width} × {height}</span>
        </div>
      </div>
    ),
    {
      width,
      height,
    }
  );
}