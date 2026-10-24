Add-Type -AssemblyName System.Drawing

# WiniPDF - icono "tile ambar + W" en todos los tamanos.
# Genera PNGs con supersampling y luego se empaquetan en el .ico (build-ico.ps1).
# Este script es el original del arte: no borrarlo.

$root = "C:\Users\osvra\Documents\Osvaldo Docs\Proyectos\Cosmos\WiniPDF"
$outDir = Join-Path $root "diseno\icono-W\png"
New-Item -ItemType Directory -Force $outDir | Out-Null

function New-RoundedPath([float]$w, [float]$h, [float]$r) {
    $p = New-Object System.Drawing.Drawing2D.GraphicsPath
    $d = $r * 2
    $p.AddArc(0, 0, $d, $d, 180, 90)
    $p.AddArc($w - $d, 0, $d, $d, 270, 90)
    $p.AddArc($w - $d, $h - $d, $d, $d, 0, 90)
    $p.AddArc(0, $h - $d, $d, $d, 90, 90)
    $p.CloseFigure()
    return $p
}

function Make-Tile([int]$size, [string]$path) {
    $ss = if ($size -le 64) { 8 } else { 4 }
    $s = $size * $ss
    $bmp = New-Object System.Drawing.Bitmap($s, $s, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
    $g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAlias
    $g.Clear([System.Drawing.Color]::Transparent)

    $radius = [float]($s * 0.22)
    $pathR = New-RoundedPath $s $s $radius
    $c1 = [System.Drawing.Color]::FromArgb(255, 0xF7, 0xBE, 0x35)
    $c2 = [System.Drawing.Color]::FromArgb(255, 0xDF, 0x8A, 0x08)
    $brush = New-Object System.Drawing.Drawing2D.LinearGradientBrush(
        (New-Object System.Drawing.Point(0, 0)),
        (New-Object System.Drawing.Point($s, $s)), $c1, $c2)
    $g.FillPath($brush, $pathR)

    # brillo superior, el mismo lenguaje que el icono grande
    $hl = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(24, 255, 255, 255))
    $hlPath = New-RoundedPath ($s * 0.92) ($s * 0.46) ($radius * 0.8)
    $g.TranslateTransform($s * 0.04, $s * 0.04)
    $g.FillPath($hl, $hlPath)
    $g.ResetTransform()

    $font = New-Object System.Drawing.Font("Segoe UI Black", [float]($s * 0.64), [System.Drawing.FontStyle]::Bold, [System.Drawing.GraphicsUnit]::Pixel)
    $sf = New-Object System.Drawing.StringFormat
    $sf.Alignment = [System.Drawing.StringAlignment]::Center
    $sf.LineAlignment = [System.Drawing.StringAlignment]::Center
    $rect = New-Object System.Drawing.RectangleF(0, ($s * 0.02), $s, $s)
    $dark = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 0x46, 0x2E, 0x00))
    $g.DrawString("W", $font, $dark, $rect, $sf)
    $g.Dispose()

    $out = New-Object System.Drawing.Bitmap($size, $size, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
    $g2 = [System.Drawing.Graphics]::FromImage($out)
    $g2.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g2.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $g2.DrawImage($bmp, 0, 0, $size, $size)
    $g2.Dispose()
    $out.Save($path, [System.Drawing.Imaging.ImageFormat]::Png)
    $out.Dispose(); $bmp.Dispose()
    $font.Dispose(); $brush.Dispose(); $hl.Dispose(); $dark.Dispose(); $pathR.Dispose(); $hlPath.Dispose()
}

foreach ($sz in @(16, 20, 24, 32, 40, 48, 64, 96, 128, 256)) {
    Make-Tile $sz (Join-Path $outDir "icon-$sz.png")
}
"pngs listos en $outDir"
