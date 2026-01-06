"""
Generate VoltMind AI Logo according to VOLTMIND-BRAND-GUIDELINES.md v2.0

Logo Design Elements:
- V Symbol: Two-tone electric blue gradient
  - Outer V: Electric Blue #2563EB
  - Inner glow: Light Blue #60A5FA
  - Core: Very Light Blue #93C5FD
- Electric Arcs: Bold amber curves with outline
  - Arc color: Bright Amber #F59E0B
  - Outline: Dark Brown #92400E
  - Width: 6px arcs with 8px outline
- Text:
  - "VoltMind": Navy #0F172A
  - "AI": Electric Blue #2563EB
- Background: Transparent (RGBA)
- Size: 500x120px (horizontal layout for web header)
"""

from PIL import Image, ImageDraw, ImageFont
import math

def hex_to_rgb(hex_color):
    """Convert hex color to RGB tuple."""
    hex_color = hex_color.lstrip('#')
    return tuple(int(hex_color[i:i+2], 16) for i in (0, 2, 4))

# Colors from brand guidelines
COLORS = {
    'electric_blue': '#2563EB',
    'light_blue': '#60A5FA',
    'very_light_blue': '#93C5FD',
    'bright_amber': '#F59E0B',
    'dark_brown': '#92400E',
    'navy': '#0F172A',
    'white': '#FFFFFF'
}

def create_voltmind_logo(width=500, height=120, white_version=False):
    """Create VoltMind AI logo with transparent background."""

    # Create transparent canvas
    canvas = Image.new('RGBA', (width, height), (255, 255, 255, 0))
    draw = ImageDraw.Draw(canvas)

    # V symbol dimensions (left side of logo)
    v_width = 80
    v_height = 90
    v_x = 20
    v_y = (height - v_height) // 2

    if white_version:
        # White version for dark backgrounds
        outer_color = hex_to_rgb(COLORS['white'])
        inner_color = hex_to_rgb(COLORS['white'])
        core_color = hex_to_rgb(COLORS['white'])
        arc_color = hex_to_rgb(COLORS['white'])
        arc_outline = hex_to_rgb(COLORS['white'])
        text_color = hex_to_rgb(COLORS['white'])
        ai_color = hex_to_rgb(COLORS['white'])
    else:
        # Color version
        outer_color = hex_to_rgb(COLORS['electric_blue'])
        inner_color = hex_to_rgb(COLORS['light_blue'])
        core_color = hex_to_rgb(COLORS['very_light_blue'])
        arc_color = hex_to_rgb(COLORS['bright_amber'])
        arc_outline = hex_to_rgb(COLORS['dark_brown'])
        text_color = hex_to_rgb(COLORS['navy'])
        ai_color = hex_to_rgb(COLORS['electric_blue'])

    # Draw V symbol with gradient effect (three layers)
    # Outer V (Electric Blue)
    v_points_outer = [
        (v_x + v_width//2, v_y),  # Top center
        (v_x, v_y + v_height),     # Bottom left
        (v_x + 12, v_y + v_height), # Inner bottom left
        (v_x + v_width//2, v_y + 20), # Inner top center
        (v_x + v_width - 12, v_y + v_height), # Inner bottom right
        (v_x + v_width, v_y + v_height), # Bottom right
    ]
    draw.polygon(v_points_outer, fill=outer_color)

    # Inner glow (Light Blue) - smaller V inside
    offset = 8
    v_points_inner = [
        (v_x + v_width//2, v_y + offset),
        (v_x + offset, v_y + v_height - offset),
        (v_x + 14, v_y + v_height - offset),
        (v_x + v_width//2, v_y + 22),
        (v_x + v_width - 14, v_y + v_height - offset),
        (v_x + v_width - offset, v_y + v_height - offset),
    ]
    draw.polygon(v_points_inner, fill=inner_color)

    # Core (Very Light Blue) - smallest V in center
    offset2 = 16
    v_points_core = [
        (v_x + v_width//2, v_y + offset2),
        (v_x + offset2, v_y + v_height - offset2),
        (v_x + 18, v_y + v_height - offset2),
        (v_x + v_width//2, v_y + 26),
        (v_x + v_width - 18, v_y + v_height - offset2),
        (v_x + v_width - offset2, v_y + v_height - offset2),
    ]
    draw.polygon(v_points_core, fill=core_color)

    # Draw electric arcs (amber curves with outline)
    # Left arc
    arc_left_x = v_x - 5
    arc_left_y = v_y + v_height//2

    # Right arc
    arc_right_x = v_x + v_width + 5
    arc_right_y = v_y + v_height//2 - 10

    # Draw arcs with outline (simplified as curved lines)
    # Left arc outline
    draw.arc([arc_left_x - 15, arc_left_y - 20, arc_left_x + 15, arc_left_y + 20],
             start=30, end=150, fill=arc_outline, width=8)
    # Left arc
    draw.arc([arc_left_x - 15, arc_left_y - 20, arc_left_x + 15, arc_left_y + 20],
             start=30, end=150, fill=arc_color, width=6)

    # Right arc outline
    draw.arc([arc_right_x - 15, arc_right_y - 20, arc_right_x + 15, arc_right_y + 20],
             start=-30, end=90, fill=arc_outline, width=8)
    # Right arc
    draw.arc([arc_right_x - 15, arc_right_y - 20, arc_right_x + 15, arc_right_y + 20],
             start=-30, end=90, fill=arc_color, width=6)

    # Add text "VoltMind" and "AI"
    try:
        # Try to use a sans-serif font (Inter would be ideal, but fall back to Arial)
        font_large = ImageFont.truetype("arial.ttf", 48)
        font_small = ImageFont.truetype("arial.ttf", 24)
    except:
        # Fallback to default font
        font_large = ImageFont.load_default()
        font_small = ImageFont.load_default()

    # Position text to the right of V symbol
    text_x = v_x + v_width + 30
    text_y = v_y + 15

    # Draw "VoltMind"
    draw.text((text_x, text_y), "VoltMind", fill=text_color, font=font_large)

    # Draw "AI" below in electric blue
    ai_x = text_x + 180
    ai_y = text_y + 40
    draw.text((ai_x, ai_y), "AI", fill=ai_color, font=font_small)

    return canvas

def main():
    """Generate both color and white versions of the logo."""

    print("Generating VoltMind AI logos...")

    # Generate primary color logo (500x120px for web)
    print("Creating primary logo (500x120px)...")
    logo_primary = create_voltmind_logo(500, 120, white_version=False)
    logo_primary.save('images/voltmind-logo-primary.png', 'PNG')
    print("[OK] Saved: images/voltmind-logo-primary.png")

    # Generate white logo for dark backgrounds
    print("Creating white logo (500x120px)...")
    logo_white = create_voltmind_logo(500, 120, white_version=True)
    logo_white.save('images/voltmind-logo-white-header.png', 'PNG')
    print("[OK] Saved: images/voltmind-logo-white-header.png")

    # Generate high-res versions for branding assets
    print("Creating high-res primary logo (1000x240px)...")
    logo_primary_hires = create_voltmind_logo(1000, 240, white_version=False)
    logo_primary_hires.save('branding_assets/voltmind-logo-primary-hires.png', 'PNG')
    print("[OK] Saved: branding_assets/voltmind-logo-primary-hires.png")

    print("Creating high-res white logo (1000x240px)...")
    logo_white_hires = create_voltmind_logo(1000, 240, white_version=True)
    logo_white_hires.save('branding_assets/voltmind-logo-white-hires.png', 'PNG')
    print("[OK] Saved: branding_assets/voltmind-logo-white-hires.png")

    print("\n[SUCCESS] All logos generated successfully!")
    print("\nLogo specifications:")
    print("- V Symbol: Two-tone electric blue gradient")
    print("- Electric Arcs: Bright amber with dark brown outline")
    print("- Text: 'VoltMind' in navy, 'AI' in electric blue")
    print("- Background: Transparent (RGBA)")

if __name__ == '__main__':
    main()
