'use client';
import React from 'react';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { MenuToggleIcon } from '@/components/ui/menu-toggle-icon';
import { useScroll } from '@/components/ui/use-scroll';
import { createPortal } from 'react-dom';

export function Header() {
	const [open, setOpen] = React.useState(false);
	const scrolled = useScroll(10);

	const links = [
		{
			label: 'Why Research',
			href: '#why-research',
		},
		{
			label: 'Testimonials',
			href: '#testimonials',
		},
		{
			label: 'Process',
			href: '#how-it-works',
		},
	];

	React.useEffect(() => {
		if (open) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
		return () => {
			document.body.style.overflow = '';
		};
	}, [open]);

	return (
		<header
			className={cn('sticky top-0 z-50 w-full border-b border-transparent', {
				'bg-background/95 supports-[backdrop-filter]:bg-background/50 border-border backdrop-blur-lg':
					scrolled,
			})}
		>
			<nav className="mx-auto flex h-14 w-full max-w-5xl items-center justify-between px-4">
				<div className="hover:bg-accent rounded-md p-2">
					<WordmarkIcon className="h-4" />
				</div>
				<div className="hidden items-center gap-2 md:flex">
					{links.map((link) => (
						<a key={link.label} className={buttonVariants({ variant: 'ghost' })} href={link.href}>
							{link.label}
						</a>
					))}
					<a href="https://form.typeform.com/to/KWrV6NVC" target="_blank" rel="noopener noreferrer"><Button className="bg-primary hover:bg-primary/90">Get Started</Button></a>
				</div>
				<div className="flex items-center gap-2 md:hidden">
					<a href="https://form.typeform.com/to/KWrV6NVC" target="_blank" rel="noopener noreferrer">
						<Button size="sm" className="bg-primary hover:bg-primary/90 rounded-full text-xs px-4">Get Started</Button>
					</a>
					<Button
						size="icon"
						variant="outline"
						onClick={() => setOpen(!open)}
						aria-expanded={open}
						aria-controls="mobile-menu"
						aria-label="Toggle menu"
					>
						<MenuToggleIcon open={open} className="size-5" duration={300} />
					</Button>
				</div>
			</nav>
			<MobileMenu open={open} onClose={() => setOpen(false)} className="flex flex-col justify-between gap-2">
				<div className="grid gap-y-2">
					{links.map((link) => (
						<a
							key={link.label}
							className={buttonVariants({
								variant: 'ghost',
								className: 'justify-start',
							})}
							href={link.href}
							onClick={() => setOpen(false)}
						>
							{link.label}
						</a>
					))}
				</div>
			</MobileMenu>
		</header>
	);
}

type MobileMenuProps = React.ComponentProps<'div'> & {
	open: boolean;
	onClose: () => void;
};

function MobileMenu({ open, onClose, children, className, ...props }: MobileMenuProps) {
	if (!open || typeof window === 'undefined') return null;

	return createPortal(
		<div
			id="mobile-menu"
			className={cn(
				'bg-background/95 supports-[backdrop-filter]:bg-background/50 backdrop-blur-lg',
				'fixed top-14 right-0 bottom-0 left-0 z-40 flex flex-col overflow-hidden border-y md:hidden',
			)}
		>
			<div
				data-slot={open ? 'open' : 'closed'}
				className={cn(
					'data-[slot=open]:animate-in data-[slot=open]:zoom-in-97 ease-out',
					'size-full p-4',
					className,
				)}
				{...props}
			>
				{children}
			</div>
		</div>,
		document.body,
	);
}



export const WordmarkIcon = (props: React.ComponentProps<"svg">) => (
  <svg viewBox="0 0 120 24" fill="currentColor" {...props}>
    <text x="0" y="18" fontFamily="Georgia, 'Times New Roman', serif" fontSize="20" fontWeight="600" letterSpacing="1">ProfLink</text>
  </svg>
);
