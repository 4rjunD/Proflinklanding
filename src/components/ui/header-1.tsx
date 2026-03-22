'use client';
import React from 'react';
import Image from 'next/image';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { MenuToggleIcon } from '@/components/ui/menu-toggle-icon';
import { useScroll } from '@/components/ui/use-scroll';
import { createPortal } from 'react-dom';

function useCtaVisible() {
	const [visible, setVisible] = React.useState(true);

	React.useEffect(() => {
		const targets = document.querySelectorAll('[data-cta-section]');
		if (targets.length === 0) {
			setVisible(false);
			return;
		}

		const visibleSet = new Set<Element>();

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						visibleSet.add(entry.target);
					} else {
						visibleSet.delete(entry.target);
					}
				});
				setVisible(visibleSet.size > 0);
			},
			{ threshold: 0.1 }
		);

		targets.forEach((t) => observer.observe(t));
		return () => observer.disconnect();
	}, []);

	return visible;
}

export function Header() {
	const [open, setOpen] = React.useState(false);
	const scrolled = useScroll(10);
	const ctaOnScreen = useCtaVisible();
	const showHeaderCta = !ctaOnScreen;

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
				<a href="#" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
					<Image src="/Proflinklogotransparent.png" alt="ProfLink" width={24} height={24} className="size-6" />
					<span className="text-lg font-semibold tracking-tight">ProfLink</span>
				</a>
				<div className="hidden items-center gap-2 md:flex">
					{links.map((link) => (
						<a key={link.label} className={buttonVariants({ variant: 'ghost' })} href={link.href}>
							{link.label}
						</a>
					))}
					<a
						href="https://form.typeform.com/to/KWrV6NVC"
						target="_blank"
						rel="noopener noreferrer"
						className={cn(
							'transition-all duration-300',
							showHeaderCta ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none'
						)}
					>
						<Button className="bg-primary hover:bg-primary/90">Get Started</Button>
					</a>
				</div>
				<div className="flex items-center gap-2 md:hidden">
					<a
						href="https://form.typeform.com/to/KWrV6NVC"
						target="_blank"
						rel="noopener noreferrer"
						className={cn(
							'transition-all duration-300',
							showHeaderCta ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2 pointer-events-none w-0 overflow-hidden'
						)}
					>
						<Button size="sm" className="bg-primary hover:bg-primary/90 rounded-full text-xs px-4 whitespace-nowrap">Get Started</Button>
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



